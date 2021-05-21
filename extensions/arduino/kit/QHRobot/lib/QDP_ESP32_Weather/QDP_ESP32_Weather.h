#ifndef QDP_ESP32_WEATHER_H
#define QDP_ESP32_WEATHER_H

#if defined(ESP8266)
	#include <ESP8266WiFi.h>
	#include <ESP8266HTTPClient.h>
#elif defined(ESP32)
	#include <WiFi.h>
	#include <HTTPClient.h>
#endif

#include <ArduinoJson.h>
#include <Arduino.h>
class QDP_ESP32_Weather
{
	public:
		String getToday(uint8_t i){return Today[i];};
		String getForecastDate(uint8_t i){return ForecastDate[i];};
		String getForecastHigh(uint8_t i){return ForecastHigh[i];};
		String getForecastLow(uint8_t i){return ForecastLow[i];};
		String getForecastYmd(uint8_t i){return ForecastYmd[i];};
		String getForecastWeek(uint8_t i){return ForecastWeek[i];};
		String getForecastAqi(uint8_t i){return ForecastAqi[i];};
		String getForecastFx(uint8_t i){return ForecastFx[i];};
		String getForecastFl(uint8_t i){return ForecastFl[i];};
		String getForecastType(uint8_t i){return ForecastType[i];};
		boolean RefreshData(String CityCode);
		boolean ParseJson(String json);

	private:
		String Today[5],ForecastDate[15],ForecastHigh[15],ForecastLow[15],ForecastYmd[15],ForecastWeek[15],ForecastAqi[15],ForecastFx[15],ForecastFl[15],ForecastType[15];
		


};
#endif