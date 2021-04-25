#ifndef QDP_ESP_WIFI_H
#define QDP_ESP_WIFI_H

#include <WiFiClient.h>

#define TIME_BEFOR_REBOOT 20000		// Temps avant reboot

// Libs ESP8266
	#if defined(ESP8266)
	#include <ESP8266WiFi.h>
	
// Libs ESP32
	#elif defined(ESP32)
	#include <WiFi.h>
	#endif

class QDP_ESP_WIFI	
{
	public:
		String DUINOEDU_IP;
		String DUINOEDU_SSID;
		String DUINOEDU_PWD;
		bool DUINOEDU_MULTIWIFI_connected=0;
		void connect_AP(const char *ssid,const char *password );
		void connect_AP_SetIP(const char *ssid,const char *password, IPAddress _local_ip, IPAddress _subnet, IPAddress  _gateway);
		void connect_STA_smart(String ssid, String password );
		void connect_STA(const char *ssid,const char *password );
		void connect_STA_SetIP(const char *ssid,const char *password, IPAddress _local_ip, IPAddress _subnet, IPAddress  _gateway);
		void connect_STA_SetIP_smart(String ssid, String password, IPAddress _local_ip, IPAddress _subnet, IPAddress  _gateway);
		void connect_Multi_STA(const char *ssid,const char *password );
		void connect_Multi_STA_smart(String ssid, String password );
		void connect_Multi_STA_SetIP_smart(String ssid, String password, IPAddress _local_ip, IPAddress _subnet, IPAddress  _gateway);
		void connect_Multi_STA_SetIP(const char *ssid,const char *password, IPAddress _local_ip, IPAddress _subnet, IPAddress  _gateway);
		void reconnect_wifi();
		void smartConfig();
		void startSmartConfig();
};


#endif