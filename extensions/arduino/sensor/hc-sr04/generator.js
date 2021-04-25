/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.hc_sr04_read_distance = function (block) {

        const trigPin = Blockly.Arduino.valueToCode(block, 'trig_pin', Blockly.Arduino.ORDER_ATOMIC);
        const echoPin = Blockly.Arduino.valueToCode(block, 'echo_pin', Blockly.Arduino.ORDER_ATOMIC);
        const unit = block.getFieldValue('unit');

        Blockly.Arduino.includes_.include_hc_sr04_read = `#include <Ultrasonic.h>`;
        Blockly.Arduino.definitions_[`hc_sr04_read${trigPin}${echoPin}`] =
            `Ultrasonic ultrasonic_${trigPin}_${echoPin}(${trigPin}, ${echoPin});`;

        return [`ultrasonic_${trigPin}_${echoPin}.read(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
