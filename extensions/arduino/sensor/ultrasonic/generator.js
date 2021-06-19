/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ultrasonic_readDistance = function (block) {
        const trig = block.getFieldValue('TRIG');
        const echo = block.getFieldValue('ECHO');
        const unit = block.getFieldValue('UNIT');

        Blockly.Arduino.includes_.ultrasonic_readDistance = `#include <Ultrasonic.h>`;
        Blockly.Arduino.definitions_[`ultrasonic_readDistance_${trig}_${echo}`] =
            `Ultrasonic ultrasonic_${trig}_${echo}(${trig}, ${echo});`;

        return [`ultrasonic_${trig}_${echo}.read(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
