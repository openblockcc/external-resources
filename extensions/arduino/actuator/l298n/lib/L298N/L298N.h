#ifndef L298N_h
#define L298N_h

#include "Arduino.h"

#define L298N_FORWARD   -1
#define L298N_BACKWARD  1

class L298N
{
public:
   L298N(uint8_t pinEnable, uint8_t pinIN1, uint8_t pinIN2);

   void run(int direction, int speed);
   void stop();

private:
   byte _pinEnable;
   byte _pinIN1;
   byte _pinIN2;
};

#endif