#include "Arduino.h"
#include <SoftwareSerial.h>

class OB_ChineseTTS
{
private:
    SoftwareSerial *serial;

    void clearSerial();
    void waitAllReturned();

public:
    OB_ChineseTTS(uint8_t rx, uint8_t tx);

    void begin();
    void say(char *fmt);
    void sayUnitllFinish(char *fmt);
    void playSound(uint8_t no);
    void playSoundUnitllFinish(uint8_t no);
    void setVolume(uint8_t volume);
    void setSpeechRate(uint8_t rate);
    void setPrompt(uint8_t no);
};
