#ifndef AppBtRec_H
#define AppBtRec_H
#include <Arduino.h>
class AppBtRec {
  public:
    AppBtRec();
    void PortReceive();
    bool IsObject(String obj);
    int GetVal(uint8_t num);
  private:
    int val1 = 0, val2 = 0, val3 = 0, val4 = 0, val5 = 0;
    String Last_Data,REceiveChar;
    bool IsStarts, IsVal, Mark;
    uint8_t ValNum;
};

#endif
