/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.dht_init = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        const pin = block.getFieldValue('PIN');
        const model = this.getFieldValue('MODEL');

        Blockly.Arduino.includes_.dht_init = `#include <DHT.h>`;
        Blockly.Arduino.definitions_[`dht_init_${no}`] = `DHT dht_${no}(${pin}, ${model});`;
        return '';
    };

    Blockly.Arduino.dht_readHumidity = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        return [`dht_${no}.readHumidity()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.dht_readTemperature = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        const unit = this.getFieldValue('UNIT');
        return [`dht_${no}.readTemperature(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
