#include "ZKDisplay.h"
ZKDisplay::ZKDisplay(Stream& stream) {
  IsStarts = false;
  IsVal = false;
  Mark = false;
  ValNum = 0;
  REceiveChar = "";
  _Serial = &stream;
  

}
void ZKDisplay::PortReceive() {
  if (_Serial->available() > 0) {
    byte ReadByte = _Serial->read();
    // Serial.write(ReadByte);
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
          // Serial.println(REceiveChar);
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
bool ZKDisplay::IsObject(String obj) {
  if (obj == REceiveChar) {
    REceiveChar = "";
    return true;
  }
  else {
    return false;
  }

}
int ZKDisplay::GetVal(uint8_t num) {
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


void ZKDisplay::CMD(String cmd)
{
  _Serial->print(cmd);
  for(int i =0;i<3;i++)
    _Serial->write(0xFF);
}
void ZKDisplay::TextCn(uint8_t X1,uint8_t X2,uint8_t X3,uint8_t X4,uint8_t X5,uint8_t X6,uint8_t X7,char content[],int len)
{

  String buff = "";
  buff = "xstr "+String(X1)+","+String(X2)+","+String(X3)+","+String(X4)+",0,"+String(X5)+","+String(X6)+",1,1,"+String(X7)+",\"";
  _Serial->print(buff);
  _Serial->write(content,len);
  _Serial->print("\"");

  for(int i =0;i<3;i++)
    _Serial->write(0xFF);
}
