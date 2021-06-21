#ifndef QDP_text_code_h
#define QDP_text_code_h

#if defined(ARDUINO) && ARDUINO >= 100
	#include "Arduino.h"
#else
	#include "WProgram.h"
#endif

class QDP_text_code
{
public:
	int GetUtf8ByteNumForWord(unsigned char firstCh);
	unsigned short int SearchCodeTable(unsigned short int unicodeKey);
	void Utf8ToGb2312(const unsigned char* utf8, int len,uint8_t* gbArray);
	String transform(String input_data);
};

extern QDP_text_code Transform;
#endif