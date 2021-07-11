/*
	SharpIR

	Arduino library for retrieving distance (in cm) from the analog GP2Y0A21Y and GP2Y0A02YK

	From an original version of Dr. Marcal Casas-Cartagena (marcal.casas@gmail.com)

    Version : 1.0 : Guillaume Rico

	https://github.com/guillaume-rico/SharpIR

*/

#ifndef SharpIR_h
#define SharpIR_h

#define GP2Y0A21YK0F 1080
#define GP2Y0A02YK0F 20150
#define GP2Y0A710K0F 100500

#define NB_SAMPLE 25

#ifdef ARDUINO
  #include "Arduino.h"
#elif defined(SPARK)
  #include "Particle.h"
#endif

class SharpIR
{
  public:

    SharpIR (int irPin, long sensorModel);
    int distance();

  private:

    void sort(int a[], int size);

    int _irPin;
    long _model;
};

#endif
