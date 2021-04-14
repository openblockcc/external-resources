/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.softwareSerial_begin = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const rx = Blockly.Arduino.valueToCode(block, 'rx', Blockly.Arduino.ORDER_ATOMIC);
        const tx = Blockly.Arduino.valueToCode(block, 'tx', Blockly.Arduino.ORDER_ATOMIC);
        const baudrate = this.getFieldValue('baudrate');

        Blockly.Arduino.includes_.dht_init = `#include <SoftwareSerial.h>`;
        Blockly.Arduino.definitions_[`softwareSerial_begin${no}`] = `SoftwareSerial softwareSerial_${no}(${rx}, ${tx});`;
        return `softwareSerial_${no}.begin(${baudrate});\n`;
    };

    Blockly.Arduino.softwareSerial_print = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
        return `softwareSerial_${no}.println(${data});\n`;
    };

    Blockly.Arduino.softwareSerial_available = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        return [`softwareSerial_${no}.available()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.softwareSerial_readAByte = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        return [`softwareSerial_${no}.read()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
