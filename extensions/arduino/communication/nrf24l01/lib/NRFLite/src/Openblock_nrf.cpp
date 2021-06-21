#include "Openblock_nrf.h"

Openblock_nrf::Openblock_nrf()
{
}

void Openblock_nrf::init(uint8_t id, uint8_t ce, uint8_t csn)
{
    nrf24l01.init(id, ce, csn);
}

void Openblock_nrf::sendNumber(uint8_t id, float number)
{
    nrf24l01.send(id, &number, sizeof(float));
}

void Openblock_nrf::sendString(uint8_t id, String str)
{
    char tx_buffer[str.length()];

    str.toCharArray(tx_buffer, str.length() + 1);
    nrf24l01.send(id, &tx_buffer, str.length());
}

void Openblock_nrf::sendValue(uint8_t id, String name, float value)
{
    char tx_buffer[name.length() + 5];
    String data = name + '=';

    data.toCharArray(tx_buffer, data.length() + 1);
    *(float *)(tx_buffer + data.length()) = value;
    nrf24l01.send(id, tx_buffer, data.length() + 4);
}

uint8_t Openblock_nrf::hasData()
{
    return nrf24l01.hasData();
}

void Openblock_nrf::readData()
{
    nrf24l01.readData(&rx_buffer);
}

float Openblock_nrf::getNumber()
{
    return *(float *)rx_buffer;
}

String Openblock_nrf::getString()
{
    return String(rx_buffer);
}

bool Openblock_nrf::valueAvailable(String name)
{
    return String(rx_buffer).substring(0, name.length() + sizeof('=')) == (name + '=');
}

float Openblock_nrf::getValue(String name)
{
    return *(float *)(rx_buffer + name.length() + sizeof('='));
}
