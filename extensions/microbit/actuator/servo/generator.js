/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Python.servo_write = function () {
        const port = this.getFieldValue('port');
        const degree = Blockly.Python.valueToCode(this, 'degree', Blockly.Python.ORDER_ATOMIC);

        Blockly.Python.imports_.servo = 'from servo import Servo';
        Blockly.Python.libraries_['servo_write_${port}'] = `sv${port} = Servo(pin${port})`;

        return `sv${port}.write_angle(${degree})\n`;
    };

    return Blockly;
}

exports = addGenerator;
