#include "arduino.h"



#ifndef QDPDCMOTOR_cpp
#define QDPDCMOTOR_cpp

class QDPDCMOTOR {
  public:
    QDPDCMOTOR(uint8_t port);
    void run(int speed);
    void stop();
    void PulseINI(long pulsenum, int speed,long _lowpulse,int _lowspeed);
    void DcMotorCount1();
    void DcMotorCount2();
    void PulseRun(uint8_t num);
    void DcMotorfinish();
    bool flag,flag1;
  private:
    uint8_t Mport1, Mport2, Iport;
    int setspeed;
    long count, setcount, lowpulse;
    int lowspeed;
   
};

#endif
