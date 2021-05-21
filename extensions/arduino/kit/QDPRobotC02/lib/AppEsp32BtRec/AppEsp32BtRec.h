#ifndef AppBtRec_H
#define AppBtRec_H
#include <Arduino.h>

#if defined(ESP32)
#include "BluetoothSerial.h"
#elif defined(ESP8266)
// ESP8266代码 
#endif

class AppBtRec {
    #if defined(ESP32)
    BluetoothSerial *SerialBT;
    #elif defined(ESP8266)
    Stream* SerialBT;
    #endif   
  public:
    #if defined(ESP32)
    AppBtRec(BluetoothSerial& _SerialBT ,bool _monitorPRINT);
    #elif defined(ESP8266)
    AppBtRec(Stream&  _SerialBT ,bool _monitorPRINT);
    #endif 
    void PortReceive();
    bool IsObject(String obj);
    int GetVal(uint8_t num);
  private:
    int val1 = 0, val2 = 0, val3 = 0, val4 = 0, val5 = 0;
    String Last_Data,REceiveChar;
    bool IsStarts, IsVal, Mark,monitorPRINT;
    uint8_t ValNum;
    
};
#ifdef APPBtREC_PRINT_
#define APPBtREC_PRINT
#endif
#endif