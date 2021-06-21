/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.ps2_init = function (block) {
        const din = block.getFieldValue('DIN');
        const dout = block.getFieldValue('DOUT');
        const cs = block.getFieldValue('CS');
        const clk = block.getFieldValue('CLK');

        Blockly.Arduino.includes_.ps2_init = '#include <PS2X_lib.h>';
        Blockly.Arduino.definitions_.ps2_init = 'PS2X ps2x;';

        return `ps2x.config_gamepad(${clk}, ${dout}, ${cs}, ${din}, false, false);\n`;
    };

    Blockly.Arduino.ps2_readData = function () {
        return 'ps2x.read_gamepad();\n';
    };

    Blockly.Arduino.ps2_getButton = function () {
        const button = this.getFieldValue('BUTTON');
        const code = `ps2x.Button(${button})`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.ps2_GetJoystick = function () {
        const joystick = this.getFieldValue('JOYSTICK');
        const code = `ps2x.Analog(${joystick})`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
