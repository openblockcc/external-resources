

#include "clickButton.h"

ClickButton::ClickButton(int buttonPin)
{
  _pin           = buttonPin;
  _activeHigh    = LOW;           // Assume active-low button
  _btnState      = !_activeHigh;  // initial button state in active-high logic
  _lastState     = _btnState;
  _clickCount    = 0;
  clicks         = 0;
  depressed      = false;
  _lastBounceTime = 0;
  debounceTime   = 20;            // Debounce timer in ms
  multiclickTime = 250;           // Time limit for multi clicks
  longClickTime  = 1000;          // time until long clicks register
  pinMode(_pin, INPUT);
   function = 0;
}


ClickButton::ClickButton(int buttonPin, boolean activeType)
{
  _pin           = buttonPin;
  _activeHigh    = activeType;
  _btnState      = !_activeHigh;  // initial button state in active-high logic
  _lastState     = _btnState;
  _clickCount    = 0;
  clicks         = 0;
  depressed      = 0;
  _lastBounceTime = 0;
  debounceTime   = 20;            // Debounce timer in ms
  multiclickTime = 250;           // Time limit for multi clicks
  longClickTime  = 1000;          // time until long clicks register
  pinMode(_pin, INPUT);
}

ClickButton::ClickButton(int buttonPin, bool activeType, bool internalPullup)
{
  _pin           = buttonPin;
  _activeHigh    = activeType;
  _btnState      = !_activeHigh;  // initial button state in active-high logic
  _lastState     = _btnState;
  _clickCount    = 0;
  clicks         = 0;
  depressed      = 0;
  _lastBounceTime = 0;
  debounceTime   = 20;            // Debounce timer in ms
  multiclickTime = 250;           // Time limit for multi clicks
  longClickTime  = 1000;          // time until "long" click register

  // Turn on internal pullup resistor if applicable
  if (_activeHigh == LOW && internalPullup == CLICKBTN_PULLUP)
    pinMode(_pin, INPUT_PULLUP);
  else
    pinMode(_pin, INPUT);
}



void ClickButton::Update()
{
  long now = (long)millis();      // get current time
  _btnState = digitalRead(_pin);  // current appearant button state

  // Make the button logic active-high in code
  if (!_activeHigh) _btnState = !_btnState;

  // If the switch changed, due to noise or a button press, reset the debounce timer
  if (_btnState != _lastState) _lastBounceTime = now;


  // debounce the button (Check if a stable, changed state has occured)
  if (now - _lastBounceTime > debounceTime && _btnState != depressed)
  {
    depressed = _btnState;
    if (depressed) _clickCount++;
  }

  // If the button released state is stable, report nr of clicks and start new cycle
  if (!depressed && (now - _lastBounceTime) > multiclickTime)
  {
    // positive count for released buttons
    clicks = _clickCount;
    _clickCount = 0;
  }

  // Check for "long click"
  if (depressed && (now - _lastBounceTime > longClickTime))
  {
    // negative count for long clicks
    clicks = 0 - _clickCount;
    _clickCount = 0;
  }

  _lastState = _btnState;
  if ( clicks != 0)  function =  clicks;
}
bool ClickButton::SingleClick() {
  if ( function == 1) {
     function = 0;
    return true;
  }
  else {

    return false;
  }
}
bool ClickButton::DoubleClick() {
  if ( function == 2) {
     function = 0;
    return true;
  }
  else {

    return false;
  }
}
bool ClickButton::TripleClick() {
  if ( function == 3) {
    function = 0;
    return true;
  }
  else {

    return false;
  }
}
bool ClickButton::SingleLongClick() {
  if ( function == -1) {
     function = 0;
    return true;
  }
  else {
 
    return false;
  }
}
bool ClickButton::DoubleLongClick() {
  if ( function == -2) {
     function = 0;
    return true;
  }
  else {
  
    return false;
  }
}
bool ClickButton::TripleLongClick() {
  if ( function == -3) {
     function = 0;
    return true;
  }
  else {
    
    return false;
  }
}

bool ClickButton::buttoncheck(uint8_t num){
switch(num){
  case 0:
  return SingleClick();
  break;
   case 1:
  return DoubleClick();
  break;
   case 2:
  return TripleClick();
  break;
   case 3:
  return SingleLongClick();
  break;
   case 4:
  return DoubleLongClick();
  break;
   case 5:
  return TripleLongClick();
  break;
}

}
