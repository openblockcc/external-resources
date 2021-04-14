#include "QDP_ESP_WIFI.h"
	int indx[]= {1,3,3,7,6,1,3,7,6,1,4,4,5,2,3,6,9,5,4,2,3,5,1,2,0,3,7,6,5,2,8,2,2,2,9,1,6,1,2,4,5,6,8,4};
    int hash[] = {-1,1,4,-1,4,-1,4,-3,4,2}; // -1..5
    int hash0[] = {true,(B1000|B0011)%5+true*0x1,B00000010,1,'@'-'=',7%5,1,1|2,66%8,'&'-'$'};      // Faible amplitude
	int hash1[] = {1,'@'-'=',2^1,1,B0100,7%5,(B1000|B0011)%5+true*0x1,4,B00000010,1};  			   // Moyenne
	int hash2[] = {'@'-'=',4|2,-2,0x8,-1,12^10,'@'-'=',-1,4|(B0010&B0011)%5+true*0x1-2,B00001000}; // Forte
void QDP_ESP_WIFI::connect_AP(const char *ssid,const char *password ){
	Serial.begin(115200);
	delay(500);
	WiFi.mode(WIFI_AP); //Our ESP8266-12E is an AccessPoint;
	WiFi.softAP( ssid, password ); //The command will only work if the password length is 8 characters or more.
	Serial.print ( "Connected to access point : " ); 
	Serial.println ( ssid );  
	Serial.print ( "IP address: " ); 
	DUINOEDU_IP=WiFi.softAPIP().toString();
	DUINOEDU_SSID=ssid;
	DUINOEDU_PWD=password;
	Serial.println ( WiFi.softAPIP() );
}

void QDP_ESP_WIFI::connect_AP_SetIP(const char *ssid,const char *password, IPAddress _local_ip, IPAddress _subnet, IPAddress  _gateway){
	Serial.begin(115200);
	delay(500);
	WiFi.mode(WIFI_AP); 									//Our ESP8266-12E is an AccessPoint;
	WiFi.softAP( ssid, password ); 							//The command will only work if the password length is 8 characters or more.
	WiFi.softAPConfig(_local_ip, _gateway, _subnet);
	Serial.println("---");
	Serial.print ( "Connected to access point : " ); 
	Serial.println ( ssid );  
	Serial.print ( "IP address: " ); 
	DUINOEDU_IP=WiFi.softAPIP().toString();
	DUINOEDU_SSID=ssid;
	DUINOEDU_PWD=password;
	Serial.println ( WiFi.softAPIP() );
}

void QDP_ESP_WIFI::connect_STA_smart(String ssid, String password ) {
	
	Serial.println ("\r\n==== fct:connect_STA_smart");
	Serial.println("-- arg:ssid");
	Serial.println(ssid);
	
	Serial.println("-- arg:password");
	Serial.println(password);
	

	
	// Private
	String pass;
	String id;
	
	// Si le pwd est codé
	if((password[1]>='<'&&password[1]<='@')&&(password[2]=='0'||password[2]=='1'||password[2]=='2')){
		// Il y a encodage
		pass ="";
		for (int i=0;i<password.length()-4;i++){
			pass += '?';
			switch(password[2]){
				case '0':pass[i] = password[i+4]-hash0[indx[i]];break;
				case '1':pass[i] = password[i+4]-hash1[indx[i]];break;
				case '2':pass[i] = password[i+4]-hash2[indx[i]];break;
			}
		}
	}else{
		pass=password;
	}
	
	// Si le ssid est codé
	if((ssid[1]>='<'&&ssid[1]<='@')&&(ssid[2]=='0'||ssid[2]=='1'||ssid[2]=='2')){
		// Il y a encodage
		id ="";
		for (int i=0;i<ssid.length()-4;i++){
			id += '?';
			switch(ssid[2]){
				case '0':id[i] = ssid[i+4]-hash0[indx[i]];break;
				case '1':id[i] = ssid[i+4]-hash1[indx[i]];break;
				case '2':id[i] = ssid[i+4]-hash2[indx[i]];break;
			}
		}
	}else{
		id=ssid;
	}
		
	connect_STA( &id[0], &pass[0] );
}

void QDP_ESP_WIFI::connect_STA(const char *ssid,const char *password ) {
	Serial.begin(115200);
	WiFi.mode(WIFI_STA);
	WiFi.begin ( ssid, password ); // ssid & password private
	while ( WiFi.status() != WL_CONNECTED ) {  
		if (millis()>TIME_BEFOR_REBOOT) {
		Serial.print ( "No wifi connection... Reboot !" );
		ESP.restart();
		}
		delay ( 500 ); 
		Serial.print ( "." ); 
	}
	Serial.println ( "" ); 
	Serial.print ( "Connected to station : " ); 
	Serial.println ( DUINOEDU_SSID );  
	//Serial.print ( "Password : " ); 
	//Serial.println ( DUINOEDU_PWD );  
	Serial.print ( "IP address: " ); 
	DUINOEDU_IP=WiFi.localIP().toString();

	Serial.println ( WiFi.localIP() );
	delay ( 500 );
}

void QDP_ESP_WIFI::connect_Multi_STA(const char *ssid,const char *password ) {
	Serial.begin(115200);
	WiFi.mode(WIFI_STA);
	WiFi.begin ( ssid, password ); // ssid & password private
	for (int i = 0; i < 10; i++)
	{
	Serial.print ( "." );
    if ( WiFi.status() == WL_CONNECTED ) {
	DUINOEDU_MULTIWIFI_connected=1;
	Serial.println ( "" ); 
	Serial.print ( "Connected to station : " ); 
	Serial.println ( DUINOEDU_SSID );  
	//Serial.print ( "Password : " ); 
	//Serial.println ( DUINOEDU_PWD );  
	Serial.print ( "IP address: " ); 
	DUINOEDU_IP=WiFi.localIP().toString();
	// Déjà enregistré dans la version smart
	//DUINOEDU_SSID=ssid;
	//DUINOEDU_PWD=password;
	Serial.println ( WiFi.localIP() );
	break;
	}
    delay ( 500 );
	}
}

void QDP_ESP_WIFI::connect_Multi_STA_smart(String ssid, String password ) {
	if ( !DUINOEDU_MULTIWIFI_connected ) {
	Serial.println ("\r\n==== fct:connect_Multi_STA_smart");
	Serial.println("-- arg:ssid");
	Serial.println(ssid);
	
	Serial.println("-- arg:password");
	Serial.println(password);
	
	// Public
	DUINOEDU_SSID=ssid;
	DUINOEDU_PWD=password;	
	
	// Private
	String pass;
	String id;
	
	// Si le pwd est codé
	if((password[1]>='<'&&password[1]<='@')&&(password[2]=='0'||password[2]=='1'||password[2]=='2')){
		// Il y a encodage
		pass ="";
		for (int i=0;i<password.length()-4;i++){
			pass += '?';
			switch(password[2]){
				case '0':pass[i] = password[i+4]-hash0[indx[i]];break;
				case '1':pass[i] = password[i+4]-hash1[indx[i]];break;
				case '2':pass[i] = password[i+4]-hash2[indx[i]];break;
			}
		}
	}else{
		pass=password;
	}
	
	// Si le ssid est codé
	if((ssid[1]>='<'&&ssid[1]<='@')&&(ssid[2]=='0'||ssid[2]=='1'||ssid[2]=='2')){
		// Il y a encodage
		id ="";
		for (int i=0;i<ssid.length()-4;i++){
			id += '?';
			switch(ssid[2]){
				case '0':id[i] = ssid[i+4]-hash0[indx[i]];break;
				case '1':id[i] = ssid[i+4]-hash1[indx[i]];break;
				case '2':id[i] = ssid[i+4]-hash2[indx[i]];break;
			}
		}
	}else{
		id=ssid;
	}
		
	connect_Multi_STA( &id[0], &pass[0] );
	}
}


void QDP_ESP_WIFI::connect_Multi_STA_SetIP_smart(String ssid, String password, IPAddress _local_ip, IPAddress _subnet, IPAddress  _gateway) {
	if ( !DUINOEDU_MULTIWIFI_connected ) {
	Serial.println ("\r\n==== fct:connect_Multi_STA_smart");
	Serial.println("-- arg:ssid");
	Serial.println(ssid);
	
	Serial.println("-- arg:password");
	Serial.println(password);
	
	// Public
	DUINOEDU_SSID=ssid;
	DUINOEDU_PWD=password;	
	
	// Private
	String pass;
	String id;
	
	// Si le pwd est codé
	if((password[1]>='<'&&password[1]<='@')&&(password[2]=='0'||password[2]=='1'||password[2]=='2')){
		// Il y a encodage
		pass ="";
		for (int i=0;i<password.length()-4;i++){
			pass += '?';
			switch(password[2]){
				case '0':pass[i] = password[i+4]-hash0[indx[i]];break;
				case '1':pass[i] = password[i+4]-hash1[indx[i]];break;
				case '2':pass[i] = password[i+4]-hash2[indx[i]];break;
			}
		}
	}else{
		pass=password;
	}
	
	// Si le ssid est codé
	if((ssid[1]>='<'&&ssid[1]<='@')&&(ssid[2]=='0'||ssid[2]=='1'||ssid[2]=='2')){
		// Il y a encodage
		id ="";
		for (int i=0;i<ssid.length()-4;i++){
			id += '?';
			switch(ssid[2]){
				case '0':id[i] = ssid[i+4]-hash0[indx[i]];break;
				case '1':id[i] = ssid[i+4]-hash1[indx[i]];break;
				case '2':id[i] = ssid[i+4]-hash2[indx[i]];break;
			}
		}
	}else{
		id=ssid;
	}
		
	connect_Multi_STA_SetIP( &id[0], &pass[0], _local_ip, _subnet, _gateway);
	}
}

void QDP_ESP_WIFI::connect_Multi_STA_SetIP(const char *ssid,const char *password, IPAddress _local_ip, IPAddress _subnet, IPAddress  _gateway) {
	Serial.begin(115200);
	WiFi.mode(WIFI_STA);
	WiFi.begin ( ssid, password ); // ssid & password private
	for (int i = 0; i < 10; i++)
	{
	Serial.print ( "." );
    if ( WiFi.status() == WL_CONNECTED ) {
	WiFi.config(_local_ip, _gateway, _subnet);
	DUINOEDU_MULTIWIFI_connected=1;
	Serial.println ( "" ); 
	Serial.print ( "Connected to station : " ); 
	Serial.println ( DUINOEDU_SSID );  
	//Serial.print ( "Password : " ); 
	//Serial.println ( DUINOEDU_PWD );  
	Serial.print ( "IP address: " ); 
	DUINOEDU_IP=WiFi.localIP().toString();
	// Déjà enregistré dans la version smart
	//DUINOEDU_SSID=ssid;
	//DUINOEDU_PWD=password;
	Serial.println ( WiFi.localIP() );
	break;
	}
    delay ( 500 );
	}
}

void QDP_ESP_WIFI::reconnect_wifi() {
    if ( WiFi.status() != WL_CONNECTED ) {
	connect_STA_smart( DUINOEDU_SSID, DUINOEDU_PWD );
	}
}

void QDP_ESP_WIFI::connect_STA_SetIP_smart(String ssid, String password, IPAddress _local_ip, IPAddress _subnet, IPAddress  _gateway) {

	// Public
	DUINOEDU_SSID=ssid;
	DUINOEDU_PWD=password;
	
	// Private
	String pass;
	String id;
	
	// Si le pwd est codé
	if((password[1]>='<'&&password[1]<='@')&&(password[2]=='0'||password[2]=='1'||password[2]=='2')){
		// Il y a encodage
		pass ="";
		for (int i=0;i<password.length()-4;i++){
			pass += '?';
			switch(password[2]){
				case '0':pass[i] = password[i+4]-hash0[indx[i]];break;
				case '1':pass[i] = password[i+4]-hash1[indx[i]];break;
				case '2':pass[i] = password[i+4]-hash2[indx[i]];break;
			}
		}
	}else{
		pass=password;
	}
	
	// Si le ssid est codé
	if((ssid[1]>='<'&&ssid[1]<='@')&&(ssid[2]=='0'||ssid[2]=='1'||ssid[2]=='2')){
		// Il y a encodage
		id ="";
		for (int i=0;i<ssid.length()-4;i++){
			id += '?';
			switch(ssid[2]){
				case '0':id[i] = ssid[i+4]-hash0[indx[i]];break;
				case '1':id[i] = ssid[i+4]-hash1[indx[i]];break;
				case '2':id[i] = ssid[i+4]-hash2[indx[i]];break;
			}
		}
	}else{
		id=ssid;
	}
	

	connect_STA_SetIP( &id[0], &pass[0], _local_ip, _subnet, _gateway);
}

void QDP_ESP_WIFI::connect_STA_SetIP(const char *ssid,const char *password, IPAddress _local_ip, IPAddress _subnet, IPAddress  _gateway) {
	Serial.begin(115200);
	WiFi.mode(WIFI_STA);
	WiFi.begin ( ssid, password ); 
	WiFi.config(_local_ip, _gateway, _subnet);
	while ( WiFi.status() != WL_CONNECTED ) {  
		if (millis()>TIME_BEFOR_REBOOT) {
		Serial.print ( "No wifi connection... Reboot !" );
		ESP.restart();
		}
		delay ( 500 ); 
		Serial.print ( "." ); 
	}
	Serial.println ( "" ); 
	Serial.print ( "Connected to station : " ); 
	Serial.println ( DUINOEDU_SSID );  
	Serial.print ( "IP address: " ); 
	DUINOEDU_IP=WiFi.localIP().toString();
	// Déjà enregistrés dans la version smart
	//DUINOEDU_SSID=ssid;
	//DUINOEDU_PWD=password;
	Serial.println ( WiFi.localIP() );
	delay ( 500 );
}

void QDP_ESP_WIFI::smartConfig(){
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  int cnt = 0;
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
    if (cnt++ >= 10) {
      startSmartConfig();
    }
  }
  Serial.println("Connected WIFI Success");
  Serial.printf("SSID:%s\r\n", WiFi.SSID().c_str());
  Serial.printf("PSW:%s\r\n", WiFi.psk().c_str());
  Serial.print("localIP:");
  Serial.println ( WiFi.localIP() );
}

void QDP_ESP_WIFI::startSmartConfig(){
  Serial.println("\r\nWait for Smartconfig");
  WiFi.beginSmartConfig();
  while (1)
  {
  	Serial.print("|");
    delay(500);
    if (WiFi.smartConfigDone())
    {
      Serial.println("SmartConfig Success , 3 sec late will restart the board");
      delay(3000);
      ESP.restart();
      break;
    }
  }
}