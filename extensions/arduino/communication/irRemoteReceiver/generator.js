/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.irRemoteReceiver_init = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.irRemoteReceiver_init = '#include <IRremote.h>';
        Blockly.Arduino.definitions_.irRemoteReceiver_init = `IRrecv irRemoteReceiver(${pin});`;

        return `irRemoteReceiver.enableIRIn();\n`;
    };

    Blockly.Arduino.irRemoteReceiver_dataAvailable = function () {
        return ['irRemoteReceiver.decode()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.irRemoteReceiver_recivedCommand = function () {
        return ['irRemoteReceiver.decodedIRData.command', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.irRemoteReceiver_resume = function () {
        return 'irRemoteReceiver.resume();\n';
    };

    return Blockly;
}

exports = addGenerator;
