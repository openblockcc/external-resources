/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.nrf24l01_init = function (block) {
        const ce = block.getFieldValue('CE');
        const csn = block.getFieldValue('CSN');
        const id = Blockly.Arduino.valueToCode(block, 'ID', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.nrf24l01_init = `#include <Openblock_nrf.h>`;
        Blockly.Arduino.definitions_.nrf24l01_init = `Openblock_nrf nrf24l01;`;

        return `nrf24l01.init(${id}, ${ce}, ${csn});\n`;
    };

    Blockly.Arduino.nrf24l01_sendNumber = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const id = Blockly.Arduino.valueToCode(block, 'ID', Blockly.Arduino.ORDER_ATOMIC);

        return `nrf24l01.sendNumber(${id}, ${data});\n`;
    };

    Blockly.Arduino.nrf24l01_sendString = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const id = Blockly.Arduino.valueToCode(block, 'ID', Blockly.Arduino.ORDER_ATOMIC);

        return `nrf24l01.sendString(${id}, ${data});\n`;
    };

    Blockly.Arduino.nrf24l01_sendValue = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const id = Blockly.Arduino.valueToCode(block, 'ID', Blockly.Arduino.ORDER_ATOMIC);

        return `nrf24l01.sendValue(${id}, ${name}, ${data});\n`;
    };

    Blockly.Arduino.nrf24l01_hasData = function () {
        return [`nrf24l01.hasData()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.nrf24l01_readData = function () {
        return `nrf24l01.readData();\n`;
    };

    Blockly.Arduino.nrf24l01_parseNumber = function () {
        return [`nrf24l01.getNumber()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.nrf24l01_parseString = function () {
        return [`nrf24l01.getString()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.nrf24l01_valueAvailable = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
        return [`nrf24l01.valueAvailable(${name})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.nrf24l01_parseValue = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
        return [`nrf24l01.getValue(${name})`, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
