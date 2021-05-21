#include "QDProbotAI.h"

QDProbotAI::QDProbotAI(/* args */)
{

}

QDProbotAI::~QDProbotAI()
{

}


int QDProbotAI::gettoken(void)
{
    HTTPClient gettoken;

    String apiurl = "http://";
    apiurl.concat(TOKEN_GET_URL);

    gettoken.begin(apiurl);

    char strbuff[128];
    int64_t chipid = ESP.getEfuseMac();
    sprintf(strbuff,"{\"mac\":\"%02X:%02X:%02X:%02X:%02X:%02X\"}",
                    ( uint8_t )( chipid >> 0 ) &0xff,
                    ( uint8_t )( chipid >> 8 ) &0xff,
                    ( uint8_t )( chipid >> 16 ) &0xff,
                    ( uint8_t )( chipid >> 24 ) &0xff,
                    ( uint8_t )( chipid >> 32 )  &0xff,
                    ( uint8_t )( chipid >> 40 )  &0xff);

    //Serial.printf("Size:%d\r\n",strlen(strbuff));
    Serial.println(strbuff);
    if( gettoken.POST((uint8_t*)strbuff,strlen(strbuff)) == HTTP_CODE_OK )
    {
        String RePOSTStr;
        RePOSTStr = gettoken.getString();
        if( RePOSTStr.indexOf("exist") != -1 )
        {
            Serial.println(RePOSTStr);
            return -1;
            
        }
        RePOSTStr.replace("\"","");
        RePOSTStr.trim();
        api_token_str = RePOSTStr;
        Serial.println(api_token_str);
        return 0;
    }
    else
    {
        return -1;
    }
}

void QDProbotAI::settoken(String token_str)
{
    api_token_str = token_str;
}

String QDProbotAI::Str2UrlEncode(String str)
{
    String strout = "";
    size_t length = str.length();

    //Serial.printf("length=%d\n",length);
    //Serial.println(str);

    for (int i = 0; i < length; i++)
    {
        if( isalnum(str.charAt(i)) )
        {
            if( str.charAt(i) == ' ')
            {
                strout += "%20";
            }
            else
            {
                strout +=  str.charAt(i);
            }
        }
        else
        {
            strout += '%';
            strout += ascii2hex_buff[ str.charAt(i) / 16 ];
            strout += ascii2hex_buff[ str.charAt(i) % 16 ];
        }
    }
    
    return strout;
}

int QDProbotAI::Pcm2String(uint8_t* pcm_buff, uint32_t pcm_lan, String dev_pid, String *results_str)
{
    //if( gettoken() == -1 ) return -1;

    HTTPClient resthttp;
    String apiurl = "http://";

    char strbuff[128];

    apiurl.concat(REST_URL);
    apiurl.concat('?');
    //apiurl.concat("cuid=1A57");
    apiurl.concat("cuid=1A57");
    apiurl.concat('&');
    apiurl.concat("dev_pid=");
    apiurl.concat(dev_pid);
    apiurl.concat('&');
    apiurl.concat("token=");
    apiurl.concat(api_token_str);
    apiurl.concat('&');
    sprintf(strbuff,"lan=%d",pcm_lan);
    apiurl.concat(strbuff);
    //Serial.println(apiurl);

    uint64_t time = micros();
    resthttp.begin(apiurl);
    resthttp.addHeader("Content-Type", "audio/pcm;rate=16000");
    resthttp.POST((uint8_t*)pcm_buff,pcm_lan);

    Serial.printf("Time %dms\r\n",(micros() - time )/1000);
    
    String response = resthttp.getString();
    Serial.println(response);

    deserializeJson(rest_json_doc,response);

    String err_msg =  rest_json_doc["err_msg"].as<String>();

    if( err_msg.indexOf("success")!= -1 )
    {
        JsonArray result = rest_json_doc["result"].as<JsonArray>();
        if( result.isNull())
        {
            Serial.println("isempty");
            return -1;
        }
        *results_str = result[0].as<String>();
    }
    else
    {
        Serial.println(err_msg);
        return -1;
    }
    
    return 0;
}

int QDProbotAI::String2Pcm(String str, int spd, int pit, int vol, int per,uint8_t* pcm_buff, size_t* len)
{

    spd = ( spd > 15 ) ? 15 : spd;
    pit = ( pit > 15 ) ? 15 : pit;
    vol = ( vol > 15 ) ? 15 : vol;

    HTTPClient resthttp;
    String apiurl = "http://";
    
    apiurl.concat(REST_URL_T2A);
    apiurl.concat("?tex=");
    apiurl.concat(Str2UrlEncode( Str2UrlEncode(str)));
    apiurl.concat("&lan=zh");
    apiurl.concat("&cuid=1A57");
    apiurl.concat("&ctp=1");
    apiurl.concat("&tok=");
    apiurl.concat(api_token_str);
    apiurl.concat("&spd=");
    apiurl.concat(spd);
    apiurl.concat("&pit=");
    apiurl.concat(pit);
    apiurl.concat("&vol=");
    apiurl.concat(vol);
    apiurl.concat("&per=");
    apiurl.concat(per);
    apiurl.concat("&aue=4");

    Serial.println(apiurl);
    const char *headerKeys[] = {"Content-Type"};
    resthttp.begin(apiurl);
    resthttp.collectHeaders(headerKeys,1);

    if( resthttp.GET() == HTTP_CODE_OK )
    {
        if( resthttp.hasHeader("Content-Type") == true )
        {
            //Serial.println(resthttp.header("Content-Type"));
            if( resthttp.header("Content-Type").indexOf("json") != -1 )
            {
                Serial.println(resthttp.getString());
                return -1;
            }
        }
        else
        {
            Serial.println("can't find Content-Type");
            return -1;
        }
        
        size_t pcmsize = resthttp.getSize();
        *len = pcmsize;
        if( pcmsize > 81919 )
        {
            return -1;
        }
        Serial.printf("Get Size = %d\n",pcmsize);
        size_t getsize = 0;
        WiFiClient* client = resthttp.getStreamPtr();

        while( getsize < pcmsize )
        {
            int clientsize = client->available();
            if( clientsize != 0 )
            {
                client->read((pcm_buff + getsize),clientsize);
                getsize += clientsize;
            }
            delay(5);
        }
    }
    else
    {
        return -1;
    }

    return 0;
}

int QDProbotAI::String2Pcm(String str, int spd, int pit, int vol, int per)
{
    //if( gettoken() == -1 ) return -1;

    spd = ( spd > 15 ) ? 15 : spd;
    pit = ( pit > 15 ) ? 15 : pit;
    vol = ( vol > 15 ) ? 15 : vol;

    HTTPClient resthttp;
    String apiurl = "http://";
    
    apiurl.concat(REST_URL_T2A);
    apiurl.concat("?tex=");
    apiurl.concat(Str2UrlEncode( Str2UrlEncode(str)));
    apiurl.concat("&lan=zh");
    apiurl.concat("&cuid=1A57");
    apiurl.concat("&ctp=1");
    apiurl.concat("&tok=");
    apiurl.concat(api_token_str);
    apiurl.concat("&spd=");
    apiurl.concat(spd);
    apiurl.concat("&pit=");
    apiurl.concat(pit);
    apiurl.concat("&vol=");
    apiurl.concat(vol);
    apiurl.concat("&per=");
    apiurl.concat(per);
    apiurl.concat("&aue=4");

    //Serial.println(apiurl);

    resthttp.begin(apiurl);

    if( resthttp.GET() == HTTP_CODE_OK )
    {
        size_t pcmsize = resthttp.getSize();

        size_t getsize = 0;
        WiFiClient* client = resthttp.getStreamPtr();

    }
}

bool QDProbotAI::InitI2SSpeakOrMic(int mode)
{
  esp_err_t err = ESP_OK;

  i2s_driver_uninstall(I2S_NUM_0);
  i2s_config_t i2s_config = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER),
    .sample_rate = 16000,
    .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT,
    .channel_format = I2S_CHANNEL_FMT_ALL_RIGHT,
    .communication_format = I2S_COMM_FORMAT_I2S,
    .intr_alloc_flags = ESP_INTR_FLAG_LEVEL1,
    .dma_buf_count = 6,
    .dma_buf_len = 60,
  };
  if (mode == 0)
  {
    i2s_config.mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX | I2S_MODE_PDM);
  }
  else
  {
    i2s_config.mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_TX);
    i2s_config.use_apll = false;
    i2s_config.tx_desc_auto_clear = true;
  }
  Serial.println("Init i2s_driver_install");
  err += i2s_driver_install(I2S_NUM_0, &i2s_config, 0, NULL);
  i2s_pin_config_t tx_pin_config;
  tx_pin_config.bck_io_num = -1;
  tx_pin_config.ws_io_num = CONFIG_I2S_LRCK_PIN;
  tx_pin_config.data_out_num = -1;
  tx_pin_config.data_in_num = CONFIG_I2S_DATA_IN_PIN;
  err += i2s_set_pin(I2S_NUM_0, &tx_pin_config);
  err += i2s_set_clk(I2S_NUM_0, 16000, I2S_BITS_PER_SAMPLE_16BIT, I2S_CHANNEL_MONO);
  return true;
}

String QDProbotAI::Speech_Recognition(String Language) {     //语音识别并返回结果默认8秒，指定录音变量Recognition_status后可控制录音时间，通过参数Language指定目标识别语言
  Recognition_status = false;
  String SpakeStr;
  data_offset = 0;
  Spakeflag = false;
  InitI2SSpeakOrMic(0);
  while (1)
  {
    i2s_read(I2S_NUM_0, (char *)(microphonedata0 + data_offset), 1024, &byte_read, (100 / portTICK_RATE_MS));
    data_offset += 1024;
    if (Recognition_status || data_offset >= 81919)
      break;
  }
  Serial.println("end");

  if (Pcm2String(microphonedata0, data_offset, Language, &SpakeStr) != -1)
  {
    Serial.println("Speech recognition succeeded!");
    Spakeflag = true;
  }
  else
  {
    Serial.println("Voice recognition failed!");
  }
  return SpakeStr;
}

void QDProbotAI::Speech_recognition_initialization(uint8_t I2S_LRCK_PIN,uint8_t I2S_DATA_IN_PIN,String auth) {     //语音识别初始化函数需要指定授权码
  InitI2SSpeakOrMic(1);
  delay(100);
  size_t bytes_written;
  settoken(auth);
  CONFIG_I2S_LRCK_PIN = I2S_LRCK_PIN;
  CONFIG_I2S_DATA_IN_PIN = I2S_DATA_IN_PIN;
}

void QDProbotAI::Identification_switch() {     //语音识别初始化函数需要指定授权码
  Recognition_status = 1;
}