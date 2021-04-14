/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.ps2_init = function (block) {
        const din = Blockly.Arduino.valueToCode(block, 'din', Blockly.Arduino.ORDER_ATOMIC);
        const dout = Blockly.Arduino.valueToCode(block, 'dout', Blockly.Arduino.ORDER_ATOMIC);
        const cs = Blockly.Arduino.valueToCode(block, 'cs', Blockly.Arduino.ORDER_ATOMIC);
        const clk = Blockly.Arduino.valueToCode(block, 'clk', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.ps2_init = '#include <PS2X_lib.h>';
        Blockly.Arduino.definitions_.ps2_init = 'PS2X ps2x;';

        return `ps2x.config_gamepad(${clk}, ${dout}, ${cs}, ${din}, false, false);\n`;
    };

    Blockly.Arduino.ps2_readData = function () {
        return 'ps2x.read_gamepad();\n';
    };

    Blockly.Arduino.ps2_getButton = function () {
        const button = this.getFieldValue('button');
        const code = `ps2x.Button(${button})`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.ps2_GetJoystick = function () {
        const joystick = this.getFieldValue('joystick');
        const code = `ps2x.Analog(${joystick})`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
