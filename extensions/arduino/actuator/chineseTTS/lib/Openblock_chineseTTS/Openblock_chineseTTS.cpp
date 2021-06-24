#include "Openblock_chineseTTS.h"

OB_ChineseTTS::OB_ChineseTTS(uint8_t rx, uint8_t tx)
{
    serial = new SoftwareSerial(rx, tx);
}

void OB_ChineseTTS::begin()
{
    serial->begin(9600);
}

void OB_ChineseTTS::clearSerial()
{
    // clear serial buffer
    while (serial->available() > 0)
    {
        serial->read();
    }
}

void OB_ChineseTTS::waitAllReturned()
{
    // waiting to receive all returned data
    while (serial->available() == 0)
        ;
    delay(100);
    while (serial->available() > 0)
    {
        serial->read();
    }
}

void OB_ChineseTTS::say(char *fmt)
{
    serial->print(fmt);
}

void OB_ChineseTTS::sayUnitllFinish(char *fmt)
{
    clearSerial();

    serial->print(fmt);

    // rx 0x41 for start
    while (1)
    {
        if (serial->available() > 0)
        {
            uint8_t code = serial->read();
            if (code == 0x41)
            {
                break;
            }
        }
    };

    // rx 0x4f for finish
    while (1)
    {
        if (serial->available() > 0)
        {
            uint8_t code = serial->read();
            if (code == 0x4f)
            {
                break;
            }
        }
    };
}

void OB_ChineseTTS::playSound(uint8_t no)
{
    serial->print("<Z>");
    serial->print(no);
}

void OB_ChineseTTS::playSoundUnitllFinish(uint8_t no)
{
    clearSerial();

    serial->print("<Z>");
    serial->print(no);

    // rx 0x41 for start
    while (1)
    {
        if (serial->available() > 0)
        {
            uint8_t code = serial->read();
            if (code == 0x41)
            {
                break;
            }
        }
    };

    // rx 0x4f for finish
    while (1)
    {
        if (serial->available() > 0)
        {
            uint8_t code = serial->read();
            if (code == 0x4f)
            {
                break;
            }
        }
    };

    delay(1000);
}

void OB_ChineseTTS::setVolume(uint8_t volume)
{
    clearSerial();

    serial->print("<V>");
    serial->print(volume);

    waitAllReturned();
}

void OB_ChineseTTS::setSpeechRate(uint8_t rate)
{
    clearSerial();

    serial->print("<S>");
    serial->print(rate);

    waitAllReturned();
}

void OB_ChineseTTS::setPrompt(uint8_t no)
{
    clearSerial();

    serial->print("<I>");
    serial->print(no);

    waitAllReturned();
}
