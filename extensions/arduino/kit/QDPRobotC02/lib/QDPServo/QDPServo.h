#include "arduino.h"
int QDPServoPulseWith(int  angle,bool motor){
  if(motor)
return map(angle,0,270,600,2400);
else
return map(angle,0,180,500,2500);
}
uint16_t QDPServoPulseWith1(bool dir, uint8_t speed){
 uint16_t pulselen = 0;
  speed = constrain(speed, 0, 10);
  if (speed == 0) {
    pulselen = 1500;
  }
  else if (dir) {
    pulselen = map(speed, 1, 10, 1300, 700);
  }
  else {
    pulselen = map(speed, 1, 10, 1700, 2200);
  }
  return pulselen;
}
