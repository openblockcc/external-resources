/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ironKit_init = function () {
        Blockly.Arduino.includes_.ironKit_init = '#include <MotorDriver.h>';
        Blockly.Arduino.definitions_.ironKit_init =
            `MotorDriver mMotorDriver = MotorDriver(0x60, 5);`;

        return 'mMotorDriver.begin(50);\n';
    };

    Blockly.Arduino.ironKit_setServoDegree = function () {
        const port = this.getFieldValue('port');
        const degree = Blockly.Arduino.valueToCode(this, 'degree', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.definitions_[`ironKit_setServoDegree_${port}`] =
            `Servo *servo${port} = mMotorDriver.getServo(${port});`;

        return `servo${port}->writeServo(${degree});\n`;
    };

    Blockly.Arduino.ironKit_setMotorSpeed = function () {
        const port = this.getFieldValue('port');
        const dir = this.getFieldValue('dir');
        const speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.definitions_[`ironKit_setMotorSpeed${port}`] =
            `DCMotor *DCmotor_${port} = mMotorDriver.getMotor(${port});`;

        return `DCmotor_${port}->setSpeed(${speed});\nDCmotor_${port}->run(${dir});\n`;
    };

    Blockly.Arduino.ironKit_stopMotor = function () {
        const port = this.getFieldValue('port');

        Blockly.Arduino.definitions_[`ironKit_setMotorSpeed${port}`] =
            `DCMotor *DCmotor_${port} = mMotorDriver.getMotor(${port});`;

        return `DCmotor_${port}->run(BRAKE);\n`;
    };

    Blockly.Arduino.ironKit_setRgbLedColor = function () {
        const no = this.getFieldValue('no');
        const color = Blockly.Arduino.valueToCode(this, 'colour', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        Blockly.Arduino.includes_.ironKit_setRgbLedColor = '#include <RGBLed.h>';
        Blockly.Arduino.definitions_.ironKit_setRgbLedColor = 'RGBLed *rgb = mMotorDriver.getSensor(E_RGB);';

        return `rgb->SetRgbColor(${no}, ${color});\n`;
    };

    Blockly.Arduino.ironKit_setBuzzer = function () {
        const sound = this.getFieldValue('sound');

        Blockly.Arduino.includes_.ironKit_setBuzzer = '#include <Buzzer.h>\n#include <Sounds.h>';
        Blockly.Arduino.definitions_.ironKit_setBuzzer = 'Sensor *buzzer = mMotorDriver.getSensor(E_SENSOR_MAX);';
        Blockly.Arduino.setups_.md_buzzerinit = 'mMotorDriver.getSensor(E_BUZZER);';

        return `buzzer->Sing(${sound});\n`;
    };

    Blockly.Arduino.ironKit_ps2ReadData = function () {
        Blockly.Arduino.includes_.ironKit_ps2ReadData = '#include <PS2X_lib.h>';
        Blockly.Arduino.definitions_.ironKit_ps2ReadData = 'PS2X *ps2x;';
        Blockly.Arduino.setups_.ironKit_ps2ReadData = 'ps2x = mMotorDriver.getSensor(E_PS2X);';

        return 'ps2x->read_gamepad();\n';
    };

    Blockly.Arduino.ironKit_ps2GetButton = function () {
        const button = this.getFieldValue('button');
        const code = `ps2x->Button(${button})`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.ironKit_ps2GetJoystick = function () {
        const joystick = this.getFieldValue('joystick');
        const code = `ps2x->Analog(${joystick})`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.ironKit_rgbUltrasonicInit = function () {
        const ultraPin = this.getFieldValue('ultraPin');
        const rgbPin = this.getFieldValue('rgbPin');
        Blockly.Arduino.includes_.ironKit_rgbUltrasonicInit = `#include "RgbUltrasonic.h"\nRgbUltrasonic mRUS04(${ultraPin}, ${rgbPin});`;

        return '';
    };

    Blockly.Arduino.ironKit_rgbUltrasonicSetColorStyle = function () {
        const no = this.getFieldValue('no');
        const colour = Blockly.Arduino.valueToCode(this, 'colour', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');
        const style = this.getFieldValue('style');

        return `mRUS04.SetRgbEffect(${no}, ${colour}, ${style});\ndelay(1000);\n`;
    };

    Blockly.Arduino.ironKit_rgbUltrasonicReadDistance = function () {
        const code = 'mRUS04.GetUltrasonicDistance()';

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
