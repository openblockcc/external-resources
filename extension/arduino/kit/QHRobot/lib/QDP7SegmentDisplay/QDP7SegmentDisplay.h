#include "Arduino.h"
#ifndef QDPQDP7SegmentDisplay_H
#define QDPQDP7SegmentDisplay_H

class QDP7SegmentDisplay
{
public:
    QDP7SegmentDisplay(uint8_t port1,uint8_t port2);
    void init(void);        //To clear the display
    void set(uint8_t = 2, uint8_t = 0x40, uint8_t = 0xc0); //To take effect the next time it displays.
    void reset(uint8_t port);
    void write(int8_t SegData[]);
    void write(uint8_t BitAddr, int8_t SegData);
    void display(uint16_t value);
    void display(int16_t value);
    void display(double value, uint8_t = 1) ;
    void display(int8_t DispData[]);
    void display(uint8_t BitAddr, int8_t DispData);
    void clearDisplay(void);
private:
    uint8_t Cmd_SetData;
    uint8_t Cmd_SetAddr;
    uint8_t Cmd_DispCtrl;
    boolean _PointFlag;     //_PointFlag=1:the clock point on
    void writeByte(int8_t wr_data);//write 8bit data to tm1637
    void start(void);//send start bits
    void stop(void); //send stop bits
    void point(boolean PointFlag);//whether to light the clock point ":".To take effect the next time it displays.
    void coding(int8_t DispData[]);
    int8_t coding(int8_t DispData);
    uint8_t Clkpin;
    uint8_t Datapin;
};
#endif
