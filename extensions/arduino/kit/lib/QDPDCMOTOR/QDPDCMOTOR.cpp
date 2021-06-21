#include "QDPDCMOTOR.h"
QDPDCMOTOR::QDPDCMOTOR(uint8_t port)
{
  if (port == 1) {
    Mport1 = 7;
    Mport2 = 6;
    Iport = 3;
    pinMode(7, OUTPUT);
    pinMode(6, OUTPUT);
    pinMode(3, INPUT);
  } else {
    Mport1 = 4;
    Mport2 = 5;
    Iport = 2;
    pinMode(4, OUTPUT);
    pinMode(5, OUTPUT);
    pinMode(2, INPUT);
  }

}
void QDPDCMOTOR::run(int speed)
{
  speed = speed > 255 ? 255 : speed;
  speed = speed < -255 ? -255 : speed;

  if (speed >= 0)
  {
    digitalWrite(Mport1, HIGH);
    analogWrite(Mport2, abs(speed));
  }
  else
  {
    digitalWrite(Mport1, LOW);
    analogWrite(Mport2, abs(speed));
  }
  
}
void QDPDCMOTOR::stop()
{
  digitalWrite(Mport1, LOW);
  analogWrite(Mport2, 0);
  flag1 = 0;
}
void QDPDCMOTOR::PulseINI(long pulsenum, int speed, long _lowpulse, int _lowspeed) {
  setcount = pulsenum;
  count = 0;
  setspeed = speed;
  lowpulse = _lowpulse;
  lowspeed = _lowspeed;
  flag = 1;
  flag1 = 1;
}
void QDPDCMOTOR::PulseRun(uint8_t num) {
  run(setspeed);
  if(num)
    DcMotorfinish();
   
}
void QDPDCMOTOR::DcMotorCount1() {
 count++;
  if (flag == 1 & setcount - count < lowpulse ) {
    analogWrite(Mport2, abs(lowspeed));
    flag = 0;
  }
  if (count >= setcount) {
    //flag1 = 0;
    detachInterrupt(digitalPinToInterrupt(3));
    stop();
    
  }
};

void QDPDCMOTOR::DcMotorCount2() {

  count++;
  if (flag == 1 & setcount - count < lowpulse ) {
    analogWrite(Mport2, abs(lowspeed));
    flag = 0;
  }
  if (count >= setcount) {
    //flag1 = 0;
    detachInterrupt(digitalPinToInterrupt(2));
    stop();
    
  }
};

void QDPDCMOTOR::DcMotorfinish() {
  while(flag1){
    delay(1);
//Serial.println(flag1);

  }
}