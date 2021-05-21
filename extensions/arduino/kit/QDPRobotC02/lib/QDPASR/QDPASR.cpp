#include "QDPASR.h"


void QDPASR::begin(Stream& stream){
	_serial = &stream;	
}

void QDPASR::ReceiveData(){
  if (_serial->available() > 0) {
    ReceiveByte = _serial->read();
    if (ReceiveByte == ',') {
      ReceiveString = _serial->readStringUntil('.');
      //Serial.println(ReceiveString);
    }
  }
}

void QDPASR::SendData(String Data){
	_serial->write(',');
	_serial->print(Data);
	_serial->write('.');
}

bool QDPASR::CompareData(String Data){
	if( ReceiveString == Data){
		ReceiveString = "";
		return true;
	}
	else{
		return false;
	}
}