#include "Arduino.h"
#include "NoiselessTouchESP32.h"

#define struct_member_size(type, member) sizeof(((type *)0)->member)

NoiselessTouchESP32::NoiselessTouchESP32(uint8_t pin) {
  NoiselessTouchESP32(pin, 6, 3);
}

NoiselessTouchESP32::NoiselessTouchESP32(uint8_t pin, uint8_t history_length, uint8_t hysteresis) {
  Touchdata touch = {
    pin : pin,
    history : { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
    hist_len : _max(_min((uint8_t)struct_member_size(Touchdata, history), history_length), 1),
    hist_cur : 0,
    hysteresis : _max(_min(hysteresis, 63), 1),
    last : 0,
    last_event : 0,
    last_event_ms : 0
  };
  _data = touch;
  for( _data.hist_cur = 0; _data.hist_cur < _data.hist_len; _data.hist_cur++ ) {
    _data.history[_data.hist_cur] = touchRead(_data.pin);
  }
  _data.last = value_from_history();  
}

int NoiselessTouchESP32::value_from_history() {
  uint8_t minimum = _data.history[0];
  uint8_t maximum = _data.history[0];
  uint8_t mean = 0;
  uint32_t sum = 0;
  for( int i = 0; i < _data.hist_len; i++) {
    minimum = _min(minimum, _data.history[i]);
    maximum = _max(maximum, _data.history[i]);
    sum += _data.history[i];
  }
  mean = sum / _data.hist_len;
  //Serial.printf("mean: %d\n", mean);
  while( mean - minimum > _data.hysteresis || maximum - mean > _data.hysteresis ) {
    //Serial.printf("abs(%d - %d) = %d\n", maximum, minimum, abs(maximum - minimum));
    uint8_t ldelta = abs(mean - minimum);
    uint8_t udelta = abs(maximum - mean);
    uint8_t lbound = minimum + (ldelta/2);
    uint8_t ubound = maximum - (udelta/2);
    if( ldelta < udelta ) {
      lbound = minimum;
    } else {
      ubound = maximum;
    }
    //Serial.printf("Min: %d, Lower: %d, Mean: %d, Upper: %d, Max: %d\n", minimum, lbound, mean, ubound, maximum);
    sum = 0;
    uint8_t count = 0;
    minimum = ubound;
    maximum = lbound;
    for( int i = 0; i < _data.hist_len; i++) {
      if( lbound <= _data.history[i] && _data.history[i] <= ubound ) {
        minimum = _min(minimum, _data.history[i]);
        maximum = _max(maximum, _data.history[i]);
        sum += _data.history[i];
        count++;
      }
    }
    if(count == 0) {
      return mean;
    }
    mean = sum/count;
  }
  return mean;
}

int NoiselessTouchESP32::read_raw_mean() {
  _data.hist_cur = (_data.hist_cur + 1) % _data.hist_len;
  _data.history[_data.hist_cur] = touchRead(_data.pin);
  return value_from_history();
}

int NoiselessTouchESP32::read_with_hysteresis() {
  int val = read_raw_mean();
  //Serial.printf("last: %d, hysteresis: %d, new value: %d\n", _data.last, _data.hysteresis, val);
  if( val < _data.last - _data.hysteresis || _data.last + _data.hysteresis < val ) {
    _data.last = val;
  }
  return _data.last;
}

int NoiselessTouchESP32::last_value() {
  return _data.last;
}

int NoiselessTouchESP32::changed() {
  int last = _data.last;
  int val = read_with_hysteresis();
  if( val > last ) {
    _data.last_event = -1;
    _data.last_event_ms = millis();
    return -1;
  }
  if( val < last ) {
    _data.last_event = 1;
    _data.last_event_ms = millis();
    return 1;
  }
  return 0;
}

bool NoiselessTouchESP32::touched() {
  int last = _data.last;
  int val = read_with_hysteresis();
  if( val > last ) {
    if( millis()-_data.last_event_ms < 5000 && _data.last_event == -1 ) {
      return false;
    }
    _data.last_event = -1;
    _data.last_event_ms = millis();
    return false;
  }
  if( val < last ) {
    if( millis()-_data.last_event_ms < 5000 && _data.last_event == 1 ) {
      return false;
    }
    _data.last_event = 1;
    _data.last_event_ms = millis();
    return true;
  }
  return false;
}

bool NoiselessTouchESP32::touching() {
  int last = _data.last;
  int val = read_with_hysteresis();
  if( val > last ) {
    _data.last_event = -1;
    _data.last_event_ms = millis();
    return false;
  }
  if( val < last ) {
    _data.last_event = 1;
    _data.last_event_ms = millis();
    return true;
  }
  return _data.last_event == 1;
}

