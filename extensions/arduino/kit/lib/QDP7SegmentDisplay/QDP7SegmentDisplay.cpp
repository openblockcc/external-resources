#include "QDP7SegmentDisplay.h"

static uint8_t TubeTab[] = {0x3f, 0x06, 0x5b, 0x4f,
                           0x66, 0x6d, 0x7d, 0x07,
                           0x7f, 0x6f, 0x77, 0x7c,
                           0x39, 0x5e, 0x79, 0x71,
                           0xbf, 0x86, 0xdb, 0xcf,
                           0xe6, 0xed, 0xfd, 0x87,
                           0xff, 0xef, 0xf7, 0xfc,
                           0xb9, 0xde, 0xf9, 0xf1, 0x00, 0x40};

QDP7SegmentDisplay::QDP7SegmentDisplay(uint8_t port1,uint8_t port2)
{
    Clkpin = port1;
    Datapin = port2;
    pinMode(Clkpin, OUTPUT);
    pinMode(Datapin, OUTPUT);
    set();
    clearDisplay();
}
void QDP7SegmentDisplay::reset(uint8_t port)
{
    reset(port);
    pinMode(Clkpin, OUTPUT);
    pinMode(Datapin, OUTPUT);
    set();
    clearDisplay();
}
void QDP7SegmentDisplay::init(void)
{
    clearDisplay();
}

void QDP7SegmentDisplay::writeByte(int8_t wr_data)
{
    uint8_t i, count1;
    for(i = 0; i < 8; i++)  //sent 8bit data
    {
        digitalWrite(Clkpin, LOW);
        if(wr_data & 0x01)digitalWrite(Datapin, HIGH); //LSB first
        else digitalWrite(Datapin, LOW);
        wr_data >>= 1;
        digitalWrite(Clkpin, HIGH);

    }
    digitalWrite(Clkpin, LOW); //wait for the ACK
    digitalWrite(Datapin, HIGH);
    digitalWrite(Clkpin, HIGH);
    pinMode(Datapin, INPUT);
    while(digitalRead(Datapin))
    {
        count1 += 1;
        if(count1 == 200)//
        {
            pinMode(Datapin, OUTPUT);
            digitalWrite(Datapin, LOW);
            count1 = 0;
        }
        //pinMode(Datapin,INPUT);
    }
    pinMode(Datapin, OUTPUT);

}
//send start signal to TM1637
void QDP7SegmentDisplay::start(void)
{
    digitalWrite(Clkpin, HIGH); //send start signal to TM1637
    digitalWrite(Datapin, HIGH);
    digitalWrite(Datapin, LOW);
    digitalWrite(Clkpin, LOW);
}
//End of transmission
void QDP7SegmentDisplay::stop(void)
{
    digitalWrite(Clkpin, LOW);
    digitalWrite(Datapin, LOW);
    digitalWrite(Clkpin, HIGH);
    digitalWrite(Datapin, HIGH);
}


void QDP7SegmentDisplay::display(uint16_t value)
{
    display((int)value);
    // display((double)value,0);
}

void QDP7SegmentDisplay::display(int16_t value)
{
    display((double)value, 0);
}

void QDP7SegmentDisplay::display(double value, uint8_t digits)
{


AA:
    int8_t buf[4] = {' ', ' ', ' ', ' '};
    int8_t tempBuf[4];
    uint8_t b = 0;
    uint8_t bit_num = 0;
    uint8_t  int_num = 0;
    uint8_t isNeg = 0;
    double number = value;
    if (number >= 9999.5 || number <= -999.5);
    else
    {
        // Handle negative numbers
        if (number < 0.0)
        {
            number = -number;
            isNeg = 1 ;
        }
        // Round correctly so that print(1.999, 2) prints as "2.00"
        double rounding = 0.5;
        for (uint8_t i = 0; i < digits; ++i)
            rounding /= 10.0;
        number += rounding;

        // Extract the integer part of the number and print it
        uint16_t int_part = (uint16_t )number;
        double remainder = number - (double)int_part;
        do
        {
            uint16_t m = int_part;
            int_part /= 10;
            char c = m - 10 * int_part;
            tempBuf[int_num] = c;
            int_num++;
        }
        while(int_part);

        bit_num = isNeg + int_num + digits;

        if(bit_num > 4)
        {
            bit_num = 4;
            digits = 4 - (isNeg + int_num);
            goto AA;
        }
        b = 4 - bit_num;
        if(isNeg)buf[b++] = 0x21;

        for(uint8_t i = int_num; i > 0; i--)buf[b++] = tempBuf[i-1];
        // Print the decimal point, but only if there are digits beyond
        if (digits > 0)
        {
            buf[b-1] += 0x10;
            // Extract digits from the remainder one at a time
            while (digits-- > 0)
            {
                remainder *= 10.0;
                int toPrint = int(remainder);
                buf[b++] = toPrint;
                remainder -= toPrint;
            }
        }
    }
    display(buf);
}

void QDP7SegmentDisplay::write(int8_t SegData[])
{
    uint8_t i;
    start();          //start signal sent to TM1637 from MCU
    writeByte(0x40);
    stop();
    start();
    writeByte(Cmd_SetAddr);
    for(i = 0; i < 4; i ++)
    {
        writeByte(SegData[i]);
    }
    stop();
    start();
    writeByte(Cmd_DispCtrl);
    stop();
}
void QDP7SegmentDisplay::write(uint8_t BitAddr, int8_t SegData)
{
    start();          //start signal sent to TM1637 from MCU
    writeByte(0x44);
    stop();
    start();
    writeByte(BitAddr | 0xc0);
    writeByte(SegData);
    stop();
    start();
    writeByte(Cmd_DispCtrl);
    stop();
}
void QDP7SegmentDisplay::display(int8_t DispData[])
{
    int8_t SegData[4];
    uint8_t i;
    for(i = 0; i < 4; i ++)
    {
        SegData[i] = DispData[i];
    }
    coding(SegData);
    write(SegData);
}
//******************************************
void QDP7SegmentDisplay::display(uint8_t BitAddr, int8_t DispData)
{
    int8_t SegData;

    if((DispData >= 'A' && DispData <= 'F'))DispData = DispData - 'A' + 10;
    else if((DispData >= 'a' && DispData <= 'f'))DispData = DispData - 'a' + 10;
    SegData = coding(DispData);
    write(BitAddr, SegData); //
}

void QDP7SegmentDisplay::clearDisplay(void)
{
    int8_t buf[4] = {' ', ' ', ' ', ' '};
    display(buf);
}
//To take effect the next time it displays.
void QDP7SegmentDisplay::set(uint8_t brightness, uint8_t SetData, uint8_t SetAddr)
{
    Cmd_SetData = SetData;
    Cmd_SetAddr = SetAddr;
    Cmd_DispCtrl = 0x88 + brightness;//Set the brightness and it takes effect the next time it displays.
}


void QDP7SegmentDisplay::coding(int8_t DispData[])
{
    //  uint8_t PointData = 0;
    for(uint8_t i = 0; i < 4; i ++)
    {
        DispData[i] = TubeTab[DispData[i]];
    }
}
int8_t QDP7SegmentDisplay::coding(int8_t DispData)
{
    //  uint8_t PointData = 0;
    DispData = TubeTab[DispData] ;//+ PointData;
    return DispData;
}
