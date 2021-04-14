/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.dht_init = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        const mode = this.getFieldValue('mode');

        Blockly.Arduino.includes_.include_dht_init = `#include <DHT.h>`;
        Blockly.Arduino.definitions_[`dht_init_${no}`] = `DHT dht_${no}(${pin}, ${mode});`;
        return '';
    };

    Blockly.Arduino.dht_readHumidity = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        return [`dht_${no}.readHumidity()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.dht_readTemperature = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const unit = this.getFieldValue('unit');
        return [`dht_${no}.readTemperature(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
