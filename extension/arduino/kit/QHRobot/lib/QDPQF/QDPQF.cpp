#include "QDPQF.h"
//#include "QDPprot.h"

bool QDPQF::begin(Stream &stream) {

  _serial = &stream;
}
int QDPQF::HC(char text[],uint8_t order) {
  int text_len = strlen(text) + 2;
  _serial->write(0xFD);
  _serial->write(text_len >> 8);
  _serial->write(text_len);
  _serial->write(0x01);
  _serial->write(0x01);
  _serial->print(text);
  if(order)
  QZWC();
  return 0;

}
int QDPQF::HC(int num,uint8_t order) {
char s[10]{0};//定义定符数组
sprintf(s,"%d",num);//把字转换成字符放到数据里
// itoa(i,s,10); 
  int text_len = strlen(s) + 2;
  _serial->write(0xFD);
  _serial->write(text_len >> 8);
  _serial->write(text_len);
  _serial->write(0x01);
  _serial->write(0x01);
  _serial->print(s);
  if(order)
  QZWC();
  return 0;

}


int QDPQF::HC(char data[],int len,uint8_t order) {

  int text_len = len + 2;
  _serial->write(0xFD);
  _serial->write(text_len >> 8);
  _serial->write(text_len);
  _serial->write(0x01);
  _serial->write(0x01);
  for(int i=0;i<len;i++)
  _serial->write(data[i]);
  if(order)
  QZWC();
  return 0;

}


int QDPQF::HC(float fnum,uint8_t order) {
char s[10]={0};//定义定符数组
dtostrf(fnum,10,2,s);
  int text_len = strlen(s) + 2;
  _serial->write(0xFD);
  _serial->write(text_len >> 8);
  _serial->write(text_len);
  _serial->write(0x01);
  _serial->write(0x01);
  _serial->print(s);
  if(order)
  QZWC();
  return 0;

}
int QDPQF::QZWC() {
  long Stime = millis();
  while (_serial->read() != 0x41) //等待语音合成完成
  { if (millis() - Stime > 10000)
      return -1;
    delay(0);  
  }
  while (_serial->read() != 0x4F) //等待语音播放完成
  { if (millis() - Stime > 10000)
      return -1;
    delay(0);  
  }
}
int QDPQF::QDSB(uint8_t num) {
  byte FS_array[] = {0xFD, 0x00, 0x01, 0x10};
  for (int i = 0; i < 4; i++) {
    _serial->write(FS_array[i]);
  }
  strcpy(data_js,"");
  long Stime = millis();
  int count = 0, D_len = 0, count1 = 0;
  byte data_len[2] = {0};
  //去除收到的41
  while (true) {
    if (millis() - Stime > 10000)
      return -1;
    if ((_serial->available() > 0 ) && (_serial->read() == 0x41)) {
      break;
    }
  }
  // 去除FC
  while (true) {
    if (millis() - Stime > 10000)
      return -1;
    if ((_serial->available() > 0) && (_serial->read() == 0xFC)) {
      break;
    }
  }
  //接收数据长度计算
  while (count < 2) {
    if (millis() - Stime > 10000)
      return -1;
    if (_serial->available() > 0) {
      data_len[count] = _serial->read();
      count ++;
    }
  }
  D_len = data_len[0];
  D_len <<= 8;
  D_len |= data_len[1];
  D_len -= 2;//总数据长度-2用于后面数据处理
  //下面两个字节分别为命令.命令不理.如果出现2,3,4返回值.函数返回对应数据.
  count = 0;
  while (count < 2) {
    if (millis() - Stime > 10000)
      return -1;
    if (_serial->available() > 0) {
      data_len[count] = _serial->read();
      count ++;
    }
  }
  switch ( data_len[2]) {
    case 0x2: return -2;
      break;
    case 0x3: return -3;
      break;
    case 0x4: return -4;
      break;
  }
  //接收数据.并计算出接收到有效的数据长度.方便后继处理
  count = 0;
  while (count < D_len) {
    if (millis() - Stime > 10000)
      return -1;
    if (_serial->available() > 0) {
      data_js[count] = _serial->read();
      if (data_js[count] != 0x00)
        count1 ++;
      count ++;
    }
  }
  if(num){
    HC(data_js);
   // QZWC();
  }
  //Serial.print(data_js);
  return count1;
}
int QDPQF::DBJG(char ZF[]) {
  if(strcmp(ZF,data_js)){
    return 0;
  }else{
    memset(data_js,'\0',sizeof(data_js));
    return 1;
  }
}

void QDPQF::TZSB() {
  byte FS_array[] = {0xFD, 0x00, 0x01, 0x1F};
  for (int i = 0; i < 4; i++) {
    _serial->write(FS_array[i]);

  }
}

void QDPQF::TZHC() {
  byte FS_array[] = {0xFD,0x00,0x01,0x02};
  for (int i = 0; i < 4; i++) {
    _serial->write(FS_array[i]);

  }
}
