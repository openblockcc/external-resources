#include <SPI.h>
#include <NRFLite.h>

class Openblock_nrf
{
private:
    NRFLite nrf24l01;
    char rx_buffer[32];
public:
    Openblock_nrf();

    void init(uint8_t id, uint8_t ce, uint8_t csn);
    void sendNumber(uint8_t id, float number);
    void sendString(uint8_t id, String str);
    void sendValue(uint8_t id, String name, float value);
    
    uint8_t hasData();
    void readData();
    float getNumber();
    String getString();
    bool valueAvailable(String name);
    float getValue(String name);
};
