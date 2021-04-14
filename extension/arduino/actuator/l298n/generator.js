/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.l298n_init = function (block) {
        const ch = Blockly.Arduino.valueToCode(block, 'ch', Blockly.Arduino.ORDER_ATOMIC);
        const in1 = Blockly.Arduino.valueToCode(block, 'in1', Blockly.Arduino.ORDER_ATOMIC);
        const in2 = Blockly.Arduino.valueToCode(block, 'in2', Blockly.Arduino.ORDER_ATOMIC);
        const en = Blockly.Arduino.valueToCode(block, 'en', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.definitions_[`l298n_init_${ch}`] =
`void l298n_run_${ch}(bool dir, int speed) {
  if(speed > 0){
    if(dir == true) {
      digitalWrite(${in1}, HIGH);
      digitalWrite(${in2}, LOW);
    } else {
      digitalWrite(${in1}, LOW);
      digitalWrite(${in2}, HIGH);
    }
    analogWrite(${en}, speed);
  } else {
    if(dir == true) {
      digitalWrite(${in1}, LOW);
      digitalWrite(${in2}, HIGH);
    } else {
      digitalWrite(${in1}, HIGH);
      digitalWrite(${in2}, LOW);
    }
    analogWrite(${en}, -speed);
  }
}

void l298n_break_${ch}() {
  digitalWrite(${in1}, HIGH);
  digitalWrite(${in2}, HIGH);
  analogWrite(${en}, 255);
}
`;
        Blockly.Arduino.setups_[`l298n_init_${ch}`] =
`pinMode(${in1},OUTPUT);
  pinMode(${in2},OUTPUT);
  pinMode(${en},OUTPUT);
  digitalWrite(${in1},LOW);
  digitalWrite(${in2},LOW);
  digitalWrite(${en},LOW);`;
        return '';
    };

    Blockly.Arduino.l298n_run = function (block) {
        const ch = Blockly.Arduino.valueToCode(block, 'ch', Blockly.Arduino.ORDER_ATOMIC);
        const dir = this.getFieldValue('dir');
        const speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);

        return `l298n_run_${ch}(${dir}, ${speed});\n`;
    };

    Blockly.Arduino.l298n_stop = function (block) {
        const ch = Blockly.Arduino.valueToCode(block, 'ch', Blockly.Arduino.ORDER_ATOMIC);

        return `l298n_break_${ch}();\n`;
    };

    return Blockly;
}

exports = addGenerator;
