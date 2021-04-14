#include "AppBtRec.h"
AppBtRec::AppBtRec() {
  IsStarts = false;
  IsVal = false;
  Mark = false;
  ValNum = 0;
  REceiveChar = "";

}
void AppBtRec::PortReceive() {
  if (Serial.available() > 0) {
    byte ReadByte = Serial.read();
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
              // Serial.println(val1);
              break;
            case 2:
              val2 = REceiveChar.toInt();
              //Serial.println(val2);
              break;
            case 3:
              val3 = REceiveChar.toInt();
              //Serial.println(val3);
              break;
            case 4:
              val4 = REceiveChar.toInt();
              // Serial.println(val4);
              break;
            case 5:
              val5 = REceiveChar.toInt();
              // Serial.println(val5);
              break;
          }

        } else {
          Last_Data = REceiveChar;
          //Serial.println(REceiveChar);
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
bool AppBtRec::IsObject(String obj) {
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

