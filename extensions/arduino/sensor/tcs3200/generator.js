/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tcs3200_init = function (block) {
        const s0 = block.getFieldValue('S0');
        const s1 = block.getFieldValue('S1');
        const s2 = block.getFieldValue('S2');
        const s3 = block.getFieldValue('S3');
        const oe = block.getFieldValue('OE');

        Blockly.Arduino.includes_.tcs3200_init = `#include <openblock_tcs3200.h>`;
        Blockly.Arduino.definitions_.tcs3200_init = `Openblock_tcs3200  tcs3200(${s2}, ${s3}, ${s0}, ${s1}, ${oe});`;
        return 'tcs3200.begin();\n';
    };

    Blockly.Arduino.tcs3200_calibrateWhite = function () {
        return `tcs3200.calibrateWhite();\n`;
    };

    Blockly.Arduino.tcs3200_calibrateBlack = function () {
        return `tcs3200.calibrateBlack();\n`;
    };

    Blockly.Arduino.tcs3200_measureColor = function () {
        return `tcs3200.mesureColor();\n`;
    };

    Blockly.Arduino.tcs3200_getColorValue = function (block) {
        const colour = block.getFieldValue('COLOUR');
        return [`tcs3200.getColorValue(${colour})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
