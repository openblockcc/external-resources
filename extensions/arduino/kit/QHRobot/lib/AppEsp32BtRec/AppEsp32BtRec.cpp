#include "AppEsp32BtRec.h"
#if defined(ESP32)
AppBtRec::AppBtRec(BluetoothSerial& _SerialBT,bool _monitorPRINT) {
  monitorPRINT=_monitorPRINT;
  IsStarts = false;
  IsVal = false;
  Mark = false;
  ValNum = 0;
  REceiveChar = "";
  SerialBT = &_SerialBT;  
}
#elif defined(ESP8266)
AppBtRec::AppBtRec(Stream& _SerialBT,bool _monitorPRINT) {
  monitorPRINT=_monitorPRINT;
  IsStarts = false;
  IsVal = false;
  Mark = false;
  ValNum = 0;
  REceiveChar = "";
  SerialBT = &_SerialBT;  
}
#endif  
void AppBtRec::PortReceive() {
  if (SerialBT->available() > 0) {
    byte ReadByte = SerialBT->read();
    // if(monitorPRINT)
    //   Serial.write(ReadByte);
    switch (ReadByte) {
      case ',':
        IsStarts = true;
        REceiveChar = "";
        break;
      case '.':
        if (IsVal) {
          switch (ValNum) {
            case 1:
              val1 = REceiveChar.toInt();
              if(monitorPRINT)
              Serial.println(String("val1:")+val1);
              break;
            case 2:
              val2 = REceiveChar.toInt();
              if(monitorPRINT)
                Serial.println(String("val2:")+val2);
              break;
            case 3:
              val3 = REceiveChar.toInt();
              if(monitorPRINT)
                Serial.println(String("val3:")+val3);
              break;
            case 4:
              val4 = REceiveChar.toInt();
              if(monitorPRINT)
                Serial.println(String("val4:")+val4);
              break;
            case 5:
              val5 = REceiveChar.toInt();
              if(monitorPRINT)
                Serial.println(String("val5:")+val5);
              break;
          }

        } else {
          Last_Data = REceiveChar;
          if(monitorPRINT)
            Serial.println(String("REceiveChar:")+REceiveChar);
        }
        ValNum = 0;
        IsStarts = false;
        IsVal = false;
        Mark = false;
        break;
      case '!':
        IsVal = true;
        Mark = true;
        break;
      default:
        if (IsStarts) {
          if (IsVal) {
            if (Mark) {
              ValNum = ReadByte - '0';
              Mark = false;
            }
            else {
              REceiveChar += char(ReadByte);
            }
          } else {
            REceiveChar += char(ReadByte);
          }
        }
        break;
    }
  }
}
bool AppBtRec::IsObject(String obj ) {
  if (obj == REceiveChar) {
    REceiveChar = "";
    return true;
  }
  else {
    return false;
  }

}
int AppBtRec::GetVal(uint8_t num) {
  switch (num) {
    case 1 :
      return val1;
      break;
    case 2 :
      return val2;
      break;
    case 3 :
      return val3;
      break;
    case 4 :
      return val4;
      break;
    case 5 :
      return val5;
      break;

  }
}

