

#ifndef _QDP16PWM_H
#define _QDP16PWM_H

#if ARDUINO >= 100
 #include <Arduino.h>
#else
 #include <WProgram.h>
#endif
#include <Wire.h>

#define PCA9685_SUBADR1 0x2
#define PCA9685_SUBADR2 0x3
#define PCA9685_SUBADR3 0x4

#define PCA9685_MODE1 0x0
#define PCA9685_PRESCALE 0xFE

#define LED0_ON_L 0x6
#define LED0_ON_H 0x7
#define LED0_OFF_L 0x8
#define LED0_OFF_H 0x9

#define ALLLED_ON_L 0xFA
#define ALLLED_ON_H 0xFB
#define ALLLED_OFF_L 0xFC
#define ALLLED_OFF_H 0xFD


class QDP16PWM {
 public:
  QDP16PWM(uint8_t addr = 0x40);
  QDP16PWM(TwoWire *I2C, uint8_t addr = 0x40);
  void begin(void);
  void reset(void);
  void setPWMFreq(float freq);
  void setPWM(uint8_t num, uint16_t on, uint16_t off);
  void set_180(uint16_t _min,uint16_t _max);
  void setDegree1(uint8_t num,uint8_t degree);
  void set_360(uint16_t _S_param,uint16_t _CW_L_param,uint16_t _CW_H_param,uint16_t _CCW_L_param,uint16_t _CCW_H_param );
  void setDegree2(uint8_t num, bool dir, uint8_t speed);
  void setPin(uint8_t num, uint16_t val, bool invert=false);

 private:
  uint8_t _i2caddr;
  uint16_t min, max,S_param, CW_L_param, CW_H_param, CCW_L_param, CCW_H_param ;
  TwoWire *_i2c;

  uint8_t read8(uint8_t addr);
  void write8(uint8_t addr, uint8_t d);
};

#endif
