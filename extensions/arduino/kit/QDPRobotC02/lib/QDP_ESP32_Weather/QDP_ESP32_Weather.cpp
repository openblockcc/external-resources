#include "QDP_ESP32_Weather.h"

boolean QDP_ESP32_Weather::RefreshData(String CityCode){
	boolean result;
	if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
        http.begin("\u0068\u0074\u0074\u0070\u003A\u002F\u002F\u0074\u002E\u0077\u0065\u0061\u0074\u0068\u0065\u0072\u002E\u0069\u0074\u0062\u006F\u0079\u002E\u006E\u0065\u0074\u002F\u0061\u0070\u0069\u002F\u0077\u0065\u0061\u0074\u0068\u0065\u0072\u002F\u0063\u0069\u0074\u0079\u002F"+CityCode);

    int httpCode = http.GET();
    if (httpCode > 0) {
      String Request_result = http.getString();
      // Serial.println(Request_result);
      //Serial.println("-------------------");
      result = ParseJson(Request_result);
    }
    else {
      Serial.println("Invalid response!");
      result = false;
    }
    http.end();
  }else{
  	result = false;
  }  
  return result;
}

boolean QDP_ESP32_Weather::ParseJson(String json) {
  StaticJsonDocument<6144> doc;
  DeserializationError error = deserializeJson(doc, json);
  if (error) {
    Serial.print(F("deserializeJson() failed: "));
    Serial.println(error.f_str());
    return false;
  }

  JsonObject data = doc["data"];
	const char* data_shidu = data["shidu"]; // "61%"
	int data_pm25 = data["pm25"]; // 31
	int data_pm10 = data["pm10"]; // 66
	const char* data_quality = data["quality"]; // "良"
	const char* data_wendu = data["wendu"]; // "31"
	Today[0] = data_shidu;
	Today[1] = String(data_pm25);
	Today[2] = String(data_pm10);
	Today[3] = data_quality;
	Today[4] = data_wendu;

  int i=0;
  for (JsonObject elem : data["forecast"].as<JsonArray>()) {

  const char* date = elem["date"]; // "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", ...
  const char* high = elem["high"]; // "高温 31℃", "高温 31℃", "高温 31℃", "高温 30℃", "高温 30℃", "高温 29℃", "高温 ...
  const char* low = elem["low"]; // "低温 23℃", "低温 25℃", "低温 26℃", "低温 25℃", "低温 25℃", "低温 26℃", "低温 27℃", ...
  const char* ymd = elem["ymd"]; // "2021-05-06", "2021-05-07", "2021-05-08", "2021-05-09", "2021-05-10", ...
  const char* week = elem["week"]; // "星期四", "星期五", "星期六", "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", ...
  // const char* sunrise = elem["sunrise"]; // "05:48", "05:48", "05:47", "05:46", "05:46", "05:45", "05:45", ...
  // const char* sunset = elem["sunset"]; // "18:53", "18:53", "18:54", "18:54", "18:54", "18:55", "18:55", ...
  int aqi = elem["aqi"]; // 29, 38, 40, 37, 42, 17, 16, 18, 27, 35, 53, 34, 26, 31, 37
  const char* fx = elem["fx"]; // "东南风", "南风", "南风", "南风", "南风", "南风", "南风", "南风", "东南风", "南风", "东南风", ...
  const char* fl = elem["fl"]; // "3级", "2级", "2级", "2级", "3级", "3级", "2级", "2级", "3级", "2级", "2级", "2级", ...
  const char* type = elem["type"]; // "晴", "晴", "多云", "多云", "多云", "阵雨", "阵雨", "多云", "多云", "晴", "阴", "多云", ...
  // const char* notice = elem["notice"]; // "愿你拥有比阳光明媚的心情", "愿你拥有比阳光明媚的心情", "阴晴之间，谨防紫外线侵扰", "阴晴之间，谨防紫外线侵扰", ...
  ForecastDate[i] = date;
  ForecastHigh[i] = high;
  ForecastLow[i] = low;
  ForecastYmd[i] = ymd;
  ForecastWeek[i] = week;
  ForecastAqi[i] = String(aqi);
  ForecastFx[i] = fx;
  ForecastFl[i] = fl;
  ForecastType[i] = type;
  i++;

}

  return true;
}