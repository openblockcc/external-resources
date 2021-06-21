#ifndef QDPVoice_h
#define QDPVoice_h
void VoiceSendData(uint8_t addr,uint8_t pin){
	pinMode(pin, OUTPUT);
	int i;
	digitalWrite(pin , LOW);
	delay(3); //>2ms
	for(i=0; i<8; i++){
	digitalWrite(pin, HIGH);
	if(addr&1){
	  delayMicroseconds(2400); //>2400us
	  digitalWrite(pin, LOW);
	  delayMicroseconds(800);
	} //>800us
	else{
	  delayMicroseconds(800); //>800us
	  digitalWrite(pin, LOW);
	  delayMicroseconds(2400);
	} //>2400us
	addr>>=1;
	}
	digitalWrite(pin, HIGH);
}
#endif
