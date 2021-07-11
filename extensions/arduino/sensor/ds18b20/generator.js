/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ds18b20_init = function (block) {
        const quantity = Blockly.Arduino.valueToCode(block, 'QUANTITY', Blockly.Arduino.ORDER_ATOMIC);
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.ds18b20_init = `#include <OneWire.h>\n#include <DallasTemperature.h>`;
        Blockly.Arduino.definitions_.ds18b20_init = `OneWire ds18b20Wire(${pin});\nDallasTemperature ds18b20(&ds18b20Wire);` +
            `\n\nDeviceAddress ds18b20_addr[${quantity}];`;
        return `ds18b20.begin();\nfor(uint8_t i = 0; i < ${quantity}; i++) {\n  ` +
            `ds18b20.getAddress(ds18b20_addr[i], i);\n  ds18b20.setResolution(ds18b20_addr[i], 12);\n}\n`;
    };

    Blockly.Arduino.ds18b20_readAllTemperatures = function () {
        return `ds18b20.requestTemperatures();\n`;
    };

    Blockly.Arduino.ds18b20_temperature = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC) - 1;
        const unit = this.getFieldValue('UNIT');
        return [`ds18b20.getTemp${unit}ByIndex(${no})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
