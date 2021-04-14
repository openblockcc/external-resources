#ifndef ZKDisplay_H
#define ZKDisplay_H
#include <Arduino.h>
//#include "BluetoothSerial.h"
class ZKDisplay {
    Stream *_Serial;
  public:
    ZKDisplay(Stream& stream);
    void PortReceive();
    bool IsObject(String obj);
    int GetVal(uint8_t num);
    void CMD(String cmd);
    void TextCn(uint8_t X1,uint8_t X2,uint8_t X3,uint8_t X4,uint8_t X5,uint8_t X6,uint8_t X7,char content[],int len);
  private:
    int val1 = 0, val2 = 0, val3 = 0, val4 = 0, val5 = 0;
    String Last_Data,REceiveChar;
    bool IsStarts, IsVal, Mark;
    uint8_t ValNum;
    
};

#endif
