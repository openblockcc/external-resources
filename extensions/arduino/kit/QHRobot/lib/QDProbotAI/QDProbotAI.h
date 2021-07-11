#ifndef _QDProbotAI_H_
#define _QDProbotAI_H_

#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <driver/i2s.h>


#define  TOKEN_GET_URL      "\u0066\u006C\u006F\u0077\u002E\u006D\u0035\u0073\u0074\u0061\u0063\u006B\u002E\u0063\u006F\u006D\u003A\u0035\u0030\u0030\u0033\u002F\u0074\u006F\u006B\u0065\u006E\u005F\u0067\u0065\u0074"
#define  REST_URL           "\u0066\u006C\u006F\u0077\u002E\u006D\u0035\u0073\u0074\u0061\u0063\u006B\u002E\u0063\u006F\u006D\u003A\u0035\u0030\u0030\u0033\u002F\u0070\u0063\u006D"
#define  REST_URL_T2A       "\u0066\u006C\u006F\u0077\u002E\u006D\u0035\u0073\u0074\u0061\u0063\u006B\u002E\u0063\u006F\u006D\u003A\u0035\u0030\u0030\u0033\u002F\u0074\u0065\u0078\u0074\u0032\u0061\u0075\u0064\u0069\u006F"

#define  JSON_DOCSIZE   512

#define  DEV_PID_MANDARIN   "\u0031\u0035\u0033\u0037"    
#define  DEV_PID_M_AND_E    "\u0031\u0035\u0033\u0036"     
#define  DEV_PID_ENGLISH    "\u0031\u0037\u0033\u0037"     
#define  DEV_PID_CANTONESE  "\u0031\u0036\u0033\u0037"    

//200825
//#define CONFIG_I2S_LRCK_PIN 23     //I2S_LRCK管脚设置
//#define CONFIG_I2S_DATA_IN_PIN 19     //I2S_DATA管脚设置

struct pcmPack
{
    uint8_t *packData;
    uint32_t packsize;
};

class QDProbotAI
{
private:
    String  api_token_str;
    StaticJsonDocument<JSON_DOCSIZE>    rest_json_doc;
    char ascii2hex_buff[17] ="\u0030\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039\u0061\u0062\u0063\u0064\u0065\u0066";
    //200825
    bool Spakeflag = false;
    bool Recognition_status;     //录音变量变量为假停止录音
    uint8_t microphonedata0[1024 * 80];
    size_t byte_read = 0;
    int16_t *buffptr;
    uint32_t data_offset = 0;
    uint8_t CONFIG_I2S_LRCK_PIN;
    uint8_t CONFIG_I2S_DATA_IN_PIN;

public:
    QueueHandle_t xQ_i2sSteam = NULL;

public:
    QDProbotAI();
    ~QDProbotAI();
    int gettoken(void);
    int creattoken(void);
    void settoken(String token_str);
    
    int Pcm2String(uint8_t* pcm_buff, uint32_t pcm_lan, String dev_pid, String *results_str);
    int String2Pcm(String str, int spd, int pit, int vol, int per,uint8_t* pcm_buff, size_t* len);
    int String2Pcm(String str, int spd, int pit, int vol, int per);
    String Str2UrlEncode(String str);
    //200825
    bool InitI2SSpeakOrMic(int mode);
    String Speech_Recognition(String Language);
    void Speech_recognition_initialization(uint8_t I2S_LRCK_PIN,uint8_t I2S_DATA_IN_PIN,String auth);
    void Identification_switch();

};



#endif