#include "MD_TCS230.h"

#define TCS3200_RED   0
#define TCS3200_GREEN 1
#define TCS3200_BLUE  2
#define TCS3200_RGB   3

class Openblock_tcs3200
{
private:
    MD_TCS230* device;
    sensorData	sd;
	colorData	rgb;
public:
    Openblock_tcs3200(uint8_t s2, uint8_t s3, uint8_t s0, uint8_t s1, uint8_t oe);

    void begin();
    void calibrateWhite();
    void calibrateBlack();
    void mesureColor();
    uint32_t getColorValue(uint8_t color);
};
