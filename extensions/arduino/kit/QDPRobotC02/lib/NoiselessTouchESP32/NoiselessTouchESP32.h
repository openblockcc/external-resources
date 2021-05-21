#ifndef NoiselessTouchESP32_h
#define NoiselessTouchESP32_h

#include "Arduino.h"

typedef struct Touchdata {
  uint8_t pin;
  uint8_t history[16];
  uint8_t hist_len;
  uint8_t hist_cur;
  uint8_t hysteresis;
  uint8_t last;
  int8_t last_event;
  uint32_t last_event_ms;
} Touchdata;

class NoiselessTouchESP32 {
  public:
    NoiselessTouchESP32(uint8_t pin);
    NoiselessTouchESP32(uint8_t pin, uint8_t history_length, uint8_t hysteresis);
    
    int value_from_history();
    int read_raw_mean();
    int read_with_hysteresis();

    int changed();
    bool touched();
    bool touching();
    int last_value();

  private:
    Touchdata _data;
};

#endif


