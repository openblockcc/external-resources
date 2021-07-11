

#include <stdio.h>
#include <Arduino.h>
#ifndef QDPQF_cpp
#define QDPQF_cpp

class QDPQF {
    Stream* _serial;//Stream为QDPFX类中的对像.*_serial为指向这个对像的指针
  public:
    bool begin(Stream& stream);
    int HC(char text[],uint8_t order = 1);
    int HC(int num,uint8_t order = 1);
    int HC(float fnum,uint8_t order = 1);
    int HC(char data[],int len,uint8_t order);
    int QZWC();
    void change();
    int QDSB(uint8_t num );
    int DBJG(char ZF[]);
    void TZSB();
    char data_js[100];
    void TZHC();
};


#endif
