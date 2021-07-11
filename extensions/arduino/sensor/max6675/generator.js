/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.max6675_init = function (block) {
        const d0 = block.getFieldValue('DO');
        const clk = block.getFieldValue('CLK');
        const cs = block.getFieldValue('CS');

        Blockly.Arduino.includes_.max6675_init = `#include <max6675.h>`;
        Blockly.Arduino.definitions_.max6675_init = `MAX6675 max6675(${clk}, ${cs}, ${d0});`;
        return '';
    };

    Blockly.Arduino.max6675_readTemperature = function () {
        const unit = this.getFieldValue('UNIT');
        if (unit === 'true') {
            return [`max6675.readFahrenheit()`, Blockly.Arduino.ORDER_ATOMIC];
        }
        return [`max6675.readCelsius()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
