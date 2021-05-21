#include "QDPservo2.h"


QDPservo2::QDPservo2(uint8_t pin) {
  pinMode(pin, OUTPUT);
  _pin = pin;
}

void QDPservo2::goAngle(int angle) {
 int pulsewidth = (angle * 11) + 500; //将角度转化为500-2480的脉宽值

//  for (int i = 0; i < 50; i++) {
    digitalWrite(_pin, HIGH);   //将舵机接口电平至高
    delayMicroseconds(pulsewidth);  //延时脉宽值的微秒数
    digitalWrite(_pin, LOW);    //将舵机接口电平至低
    delayMicroseconds(20000 - pulsewidth);
//  }
  delay(100);
}
