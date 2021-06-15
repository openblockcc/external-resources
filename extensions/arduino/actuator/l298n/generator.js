/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.l298n_init = function (block) {
        const ch = Blockly.Arduino.valueToCode(block, 'CH', Blockly.Arduino.ORDER_ATOMIC);
        const in1 = block.getFieldValue('IN1');
        const in2 = block.getFieldValue('IN2');
        const en = block.getFieldValue('EN');

        Blockly.Arduino.includes_.l298n_init = `#include <L298N.h>`;
        Blockly.Arduino.definitions_[`l298n_init_${ch}_${in1}_${in2}_${en}`] =
          `L298N motor_${ch}(${en}, ${in1}, ${in2});`;
        return '';
    };

    Blockly.Arduino.l298n_run = function (block) {
        const ch = Blockly.Arduino.valueToCode(block, 'CH', Blockly.Arduino.ORDER_ATOMIC);
        const dir = this.getFieldValue('DIR');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        return `motor_${ch}.run(${dir}, ${speed});\n`;
    };

    Blockly.Arduino.l298n_stop = function (block) {
        const ch = Blockly.Arduino.valueToCode(block, 'CH', Blockly.Arduino.ORDER_ATOMIC);

        return `motor_${ch}.stop();\n`;
    };

    return Blockly;
}

exports = addGenerator;
