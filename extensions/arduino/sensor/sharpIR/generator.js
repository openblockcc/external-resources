/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.sharpIR_init = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        const pin = block.getFieldValue('PIN');
        const model = this.getFieldValue('MODEL');

        Blockly.Arduino.includes_.sharpIR_init = `#include <SharpIR.h>`;
        Blockly.Arduino.definitions_[`sharpIR_init_${no}`] = `SharpIR sharpIR_${no}(${pin}, ${model});`;
        return '';
    };

    Blockly.Arduino.sharpIR_readDistance = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        return [`sharpIR_${no}.distance()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
