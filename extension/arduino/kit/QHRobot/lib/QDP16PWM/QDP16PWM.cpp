
#include "QDP16PWM.h"
#include <Wire.h>


QDP16PWM::QDP16PWM(uint8_t addr) {
  _i2caddr = addr;

#if defined(ARDUINO_SAM_DUE)
  _i2c = &Wire1;
#else
  _i2c = &Wire;
#endif
}


QDP16PWM::QDP16PWM(TwoWire *i2c, uint8_t addr) {
  _i2c = i2c;
  _i2caddr = addr;
}


void QDP16PWM::begin(void) {
  _i2c->begin();
  reset();
  setPWMFreq(50);
}


void QDP16PWM::reset(void) {
  write8(PCA9685_MODE1, 0x80);
  delay(10);
}

void QDP16PWM::setPWMFreq(float freq) {
#ifdef ENABLE_DEBUG_OUTPUT
  Serial.print("Attempting to set freq ");
  Serial.println(freq);
#endif

  freq *= 0.9;
  float prescaleval = 25000000;
  prescaleval /= 4096;
  prescaleval /= freq;
  prescaleval -= 1;

#ifdef ENABLE_DEBUG_OUTPUT
  Serial.print("Estimated pre-scale: "); Serial.println(prescaleval);
#endif

  uint8_t prescale = floor(prescaleval + 0.5);
#ifdef ENABLE_DEBUG_OUTPUT
  Serial.print("Final pre-scale: "); Serial.println(prescale);
#endif

  uint8_t oldmode = read8(PCA9685_MODE1);
  uint8_t newmode = (oldmode & 0x7F) | 0x10;
  write8(PCA9685_MODE1, newmode);
  write8(PCA9685_PRESCALE, prescale);
  write8(PCA9685_MODE1, oldmode);
  delay(5);
  write8(PCA9685_MODE1, oldmode | 0xa0);

#ifdef ENABLE_DEBUG_OUTPUT
  Serial.print("Mode now 0x"); Serial.println(read8(PCA9685_MODE1), HEX);
#endif
}
void QDP16PWM::set_180(uint16_t _min,uint16_t _max){
min = _min;
max = _max;

}
void QDP16PWM::setDegree1(uint8_t num, uint8_t degree) {
  degree = constrain(degree, 0, 180);
  uint16_t pulselen = map(degree, 0, 180, min, max);//110?490
 //Serial.println(pulselen);
 
  if (degree<0){ 
    setPWM(num, 4096, 0);//停止输出的特殊指令
  }else{
    setPWM(num, 0, pulselen);
  }
}

void QDP16PWM::set_360(uint16_t _S_param,uint16_t _CW_L_param,uint16_t _CW_H_param,uint16_t _CCW_L_param,uint16_t _CCW_H_param ){
  S_param = _S_param;
  CW_L_param = _CW_L_param;
  CW_H_param = _CW_H_param;
  CCW_L_param = _CCW_L_param;
  CCW_H_param = _CCW_H_param ;

}
void QDP16PWM::setDegree2(uint8_t num, bool dir, uint8_t speed) {
  uint16_t pulselen = 0;
  speed = constrain(speed, 0, 10);
  if (speed == 0) {
    pulselen = S_param;//停止285?
  }
  else if (dir) {
    pulselen = map(speed, 1, 10, CW_L_param, CW_H_param);//正转 220-80
  }
  else {
    pulselen = map(speed, 1, 10, CCW_L_param, CCW_H_param);//反转320-470?
  }
  setPWM(num, 0, pulselen);

}
void QDP16PWM::setPWM(uint8_t num, uint16_t on, uint16_t off) {
#ifdef ENABLE_DEBUG_OUTPUT
  Serial.print("Setting PWM "); Serial.print(num); Serial.print(": "); Serial.print(on); Serial.print("->"); Serial.println(off);
#endif

  _i2c->beginTransmission(_i2caddr);
  _i2c->write(LED0_ON_L + 4 * num);
  _i2c->write(on);
  _i2c->write(on >> 8);
  _i2c->write(off);
  _i2c->write(off >> 8);
  _i2c->endTransmission();
}


void QDP16PWM::setPin(uint8_t num, uint16_t val, bool invert)
{
  // Clamp value between 0 and 4095 inclusive.
  val = min(val, (uint16_t)4095);
  if (invert) {
    if (val == 0) {
      setPWM(num, 4096, 0);
    }
    else if (val == 4095) {
      setPWM(num, 0, 4096);
    }
    else {
      setPWM(num, 0, 4095 - val);
    }
  }
  else {
    if (val == 4095) {
      setPWM(num, 4096, 0);
    }
    else if (val == 0) {
      setPWM(num, 0, 4096);
    }
    else {
      setPWM(num, 0, val);
    }
  }
}


uint8_t QDP16PWM::read8(uint8_t addr) {
  _i2c->beginTransmission(_i2caddr);
  _i2c->write(addr);
  _i2c->endTransmission();

  _i2c->requestFrom((uint8_t)_i2caddr, (uint8_t)1);
  return _i2c->read();
}

void QDP16PWM::write8(uint8_t addr, uint8_t d) {
  _i2c->beginTransmission(_i2caddr);
  _i2c->write(addr);
  _i2c->write(d);
  _i2c->endTransmission();
}
