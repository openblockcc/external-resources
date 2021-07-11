
#include "QDPRobotQDPPlayerMini.h"

void QDPRobotQDPPlayerMini::setTimeOut(unsigned long timeOutDuration){
  _timeOutDuration = timeOutDuration;
}

void QDPRobotQDPPlayerMini::uint16ToArray(uint16_t value, uint8_t *array){
  *array = (uint8_t)(value>>8);
  *(array+1) = (uint8_t)(value);
}

uint16_t QDPRobotQDPPlayerMini::calculateCheckSum(uint8_t *buffer){
  uint16_t sum = 0;
  for (int i=Stack_Version; i<Stack_CheckSum; i++) {
    sum += buffer[i];
  }
  return -sum;
}

void QDPRobotQDPPlayerMini::sendStack(){
  if (_sending[Stack_ACK]) {
    while (_isSending) {
      available();
    }
  }
  else{
    delay(10);
  }


  _serial->write(_sending, QDPPLAYER_SEND_LENGTH);
  _timeOutTimer = millis();
  _isSending = _sending[Stack_ACK];
}

void QDPRobotQDPPlayerMini::sendStack(uint8_t command){
  sendStack(command, 0);
}

void QDPRobotQDPPlayerMini::sendStack(uint8_t command, uint16_t argument){
  _sending[Stack_Command] = command;
  uint16ToArray(argument, _sending+Stack_Parameter);
  uint16ToArray(calculateCheckSum(_sending), _sending+Stack_CheckSum);
  sendStack();
}

void QDPRobotQDPPlayerMini::sendStack(uint8_t command, uint8_t argumentHigh, uint8_t argumentLow){
  uint16_t buffer = argumentHigh;
  buffer <<= 8;
  sendStack(command, buffer | argumentLow);
}

void QDPRobotQDPPlayerMini::enableACK(){
  _sending[Stack_ACK] = 0x01;
}

void QDPRobotQDPPlayerMini::disableACK(){
  _sending[Stack_ACK] = 0x00;
}

bool QDPRobotQDPPlayerMini::waitAvailable(){
  _isSending = true;
  while (!available());
  return _handleType != TimeOut;
}

bool QDPRobotQDPPlayerMini::begin(Stream &stream, bool isACK){
  if (isACK) {
    enableACK();
  }
  else{
    disableACK();
  }
  
  _serial = &stream;
  _timeOutDuration += 3000;
  reset();
  waitAvailable();
  _timeOutDuration -= 3000;
  delay(200);
  return (readType() == QDPPlayerCardOnline) || !isACK;
}

uint8_t QDPRobotQDPPlayerMini::readType(){
  _isAvailable = false;
  return _handleType;
}

uint16_t QDPRobotQDPPlayerMini::read(){
  _isAvailable = false;
  return _handleParameter;
}

bool QDPRobotQDPPlayerMini::handleMessage(uint8_t type, uint16_t parameter){
  _receivedIndex = 0;
  _handleType = type;
  _handleParameter = parameter;
  _isAvailable = true;
  return _isAvailable;
}

bool QDPRobotQDPPlayerMini::handleError(uint8_t type, uint16_t parameter){
  handleMessage(type, parameter);
  _isSending = false;
}

uint8_t QDPRobotQDPPlayerMini::readCommand(){
  _isAvailable = false;
  return _handleCommand;
}

void QDPRobotQDPPlayerMini::parseStack(){
  _handleCommand = *(_received + Stack_Command);
  _handleParameter =  arrayToUint16(_received + Stack_Parameter);

  switch (_handleCommand) {
    case 0x3D:
      handleMessage(QDPPlayerPlayFinished, _handleParameter);
      break;
    case 0x3F:
      if (_handleParameter & 0x02) {
        handleMessage(QDPPlayerCardOnline, _handleParameter);
      }
      break;
    case 0x3A:
      if (_handleParameter & 0x02) {
        handleMessage(QDPPlayerCardInserted, _handleParameter);
      }
      break;
    case 0x3B:
      if (_handleParameter & 0x02) {
        handleMessage(QDPPlayerCardRemoved, _handleParameter);
      }
      break;
    case 0x40:
      handleMessage(QDPPlayerError, _handleParameter);
      break;
    case 0x41:
      _isSending = false;
      break;
    case 0x3C:
    case 0x3E:
    case 0x42:
    case 0x43:
    case 0x44:
    case 0x45:
    case 0x46:
    case 0x47:
    case 0x48:
    case 0x49:
    case 0x4B:
    case 0x4C:
    case 0x4D:
    case 0x4E:
    case 0x4F:
      _isAvailable = true;
      break;
    default:
      handleError(WrongStack);
      break;
  }
}

uint16_t QDPRobotQDPPlayerMini::arrayToUint16(uint8_t *array){
  uint16_t value = *array;
  value <<=8;
  value += *(array+1);
  return value;
}

bool QDPRobotQDPPlayerMini::validateStack(){
  return calculateCheckSum(_received) == arrayToUint16(_received+Stack_CheckSum);
}

bool QDPRobotQDPPlayerMini::available(){
  while (_serial->available()) {
    if (_receivedIndex == 0) {
      _received[Stack_Header] = _serial->read();

      if (_received[Stack_Header] == 0x7E) {
        _isAvailable = false;
        _receivedIndex ++;
      }
    }
    else{
      _received[_receivedIndex] = _serial->read();

      switch (_receivedIndex) {
        case Stack_Version:
          if (_received[_receivedIndex] != 0xFF) {
            return handleError(WrongStack);
          }
          break;
        case Stack_Length:
          if (_received[_receivedIndex] != 0x06) {
            return handleError(WrongStack);
          }
          break;
        case Stack_End:

          if (_received[_receivedIndex] != 0xEF) {
            return handleError(WrongStack);
          }
          else{
            if (validateStack()) {
              _receivedIndex = 0;
              parseStack();
              if (_isAvailable && !_sending[Stack_ACK]) {
                _isSending = false;
              }
              return _isAvailable;
            }
            else{
              return handleError(WrongStack);
            }
          }
          break;
        default:
          break;
      }
      _receivedIndex++;
    }
  }
  
  if (_isSending && (millis()-_timeOutTimer>=_timeOutDuration)) {
    return handleError(TimeOut);
  }
  
  return _isAvailable;
}

void QDPRobotQDPPlayerMini::next(){
  sendStack(0x01);
}

void QDPRobotQDPPlayerMini::previous(){
  sendStack(0x02);
}

void QDPRobotQDPPlayerMini::play(int fileNumber){
  sendStack(0x03, fileNumber);
}

void QDPRobotQDPPlayerMini::volumeUp(){
  sendStack(0x04);
}

void QDPRobotQDPPlayerMini::volumeDown(){
  sendStack(0x05);
}

void QDPRobotQDPPlayerMini::volume(uint8_t volume){
  sendStack(0x06, volume);
}

void QDPRobotQDPPlayerMini::EQ(uint8_t eq) {
  sendStack(0x07, eq);
}

void QDPRobotQDPPlayerMini::loop(int fileNumber) {
  sendStack(0x08, fileNumber);
}

void QDPRobotQDPPlayerMini::outputDevice(uint8_t device) {
  sendStack(0x09, device);
  delay(200);
}

void QDPRobotQDPPlayerMini::sleep(){
  sendStack(0x0A);
}

void QDPRobotQDPPlayerMini::reset(){
  sendStack(0x0C);
}

void QDPRobotQDPPlayerMini::start(){
  sendStack(0x0D);
}

void QDPRobotQDPPlayerMini::pause(){
  sendStack(0x0E);
}

void QDPRobotQDPPlayerMini::playFolder(uint8_t folderNumber, uint8_t fileNumber){
  sendStack(0x0F, folderNumber, fileNumber);
}

void QDPRobotQDPPlayerMini::outputSetting(bool enable, uint8_t gain){
  sendStack(0x10, enable, gain);
}

void QDPRobotQDPPlayerMini::enableLoopAll(){
  sendStack(0x11, 0x01);
}

void QDPRobotQDPPlayerMini::disableLoopAll(){
  sendStack(0x11, 0x00);
}

void QDPRobotQDPPlayerMini::playMp3Folder(int fileNumber){
  sendStack(0x12, fileNumber);
}

void QDPRobotQDPPlayerMini::advertise(int fileNumber){
  sendStack(0x13, fileNumber);
}

void QDPRobotQDPPlayerMini::playLargeFolder(uint8_t folderNumber, uint16_t fileNumber){
  sendStack(0x14, (((uint16_t)folderNumber) << 12) | fileNumber);
}

void QDPRobotQDPPlayerMini::stopAdvertise(){
  sendStack(0x15);
}

void QDPRobotQDPPlayerMini::stop(){
  sendStack(0x16);
}

void QDPRobotQDPPlayerMini::loopFolder(int folderNumber){
  sendStack(0x17, folderNumber);
}

void QDPRobotQDPPlayerMini::randomAll(){
  sendStack(0x18);
}

void QDPRobotQDPPlayerMini::enableLoop(){
  sendStack(0x19, 0x00);
}

void QDPRobotQDPPlayerMini::disableLoop(){
  sendStack(0x19, 0x01);
}

void QDPRobotQDPPlayerMini::enableDAC(){
  sendStack(0x1A, 0x00);
}

void QDPRobotQDPPlayerMini::disableDAC(){
  sendStack(0x1A, 0x01);
}

int QDPRobotQDPPlayerMini::readState(){
  sendStack(0x42);
  if (waitAvailable()) {
    return read();
  }
  else{
    return -1;
  }
}

int QDPRobotQDPPlayerMini::readVolume(){
  sendStack(0x43);
  if (waitAvailable()) {
    return read();
  }
  else{
    return -1;
  }
}

uint8_t QDPRobotQDPPlayerMini::readEQ(){
  sendStack(0x44);
  while (!available());
  if (waitAvailable()) {
    return read();
  }
  else{
    return -1;
  }
}

int QDPRobotQDPPlayerMini::reaQDPileCounts(uint8_t device){
  switch (device) {
    case QDPPLAYER_DEVICE_U_DISK:
      sendStack(0x47);
      break;
    case QDPPLAYER_DEVICE_SD:
      sendStack(0x48);
      break;
    case QDPPLAYER_DEVICE_FLASH:
      sendStack(0x49);
      break;
    default:
      break;
  }
  
  if (waitAvailable()) {
    return read();
  }
  else{
    return -1;
  }
}

int QDPRobotQDPPlayerMini::readCurrentFileNumber(uint8_t device){
  switch (device) {
    case QDPPLAYER_DEVICE_U_DISK:
      sendStack(0x4B);
      break;
    case QDPPLAYER_DEVICE_SD:
      sendStack(0x4C);
      break;
    case QDPPLAYER_DEVICE_FLASH:
      sendStack(0x4D);
      break;
    default:
      break;
  }
  if (waitAvailable()) {
    return read();
  }
  else{
    return -1;
  }
}

int QDPRobotQDPPlayerMini::reaQDPileCountsInFolder(int folderNumber){
  sendStack(0x4E, folderNumber);
  if (waitAvailable()) {
    return read();
  }
  else{
    return -1;
  }
}

int QDPRobotQDPPlayerMini::reaQDPileCounts(){
  reaQDPileCounts(QDPPLAYER_DEVICE_SD);
}

int QDPRobotQDPPlayerMini::readCurrentFileNumber(){
  readCurrentFileNumber(QDPPLAYER_DEVICE_SD);
}

void QDPRobotQDPPlayerMini::order(uint8_t num){
if(num == 1)
start();
else if(num == 0)
pause();
}