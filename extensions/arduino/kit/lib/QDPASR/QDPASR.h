#include "Arduino.h"
#ifndef QDPASR_H
#define QDPASR_H

class QDPASR {
  Stream* _serial;
  public:
  	void begin(Stream& stream);
  	void ReceiveData();
  	void SendData(String Data);
  	bool CompareData(String Data);
  private:
  	byte ReceiveByte;
  	String ReceiveString;
};

#endif