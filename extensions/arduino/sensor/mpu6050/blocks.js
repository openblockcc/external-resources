/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#0066CC';
    const secondaryColour = '#005AB5';

    Blockly.Blocks.mpu6050_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MPU6050_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'AR',
                        options: [
                            ['2G', 'MPU6050_RANGE_2_G'],
                            ['4G', 'MPU6050_RANGE_4_G'],
                            ['8G', 'MPU6050_RANGE_8_G'],
                            ['16G', 'MPU6050_RANGE_16_G']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'GR',
                        options: [
                            ['250°/s', 'MPU6050_RANGE_250_DEG'],
                            ['500°/s', 'MPU6050_RANGE_500_DEG'],
                            ['1000°/s', 'MPU6050_RANGE_1000_DEG'],
                            ['2000°/s', 'MPU6050_RANGE_2000_DEG']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'FB',
                        options: [
                            ['260Hz', 'MPU6050_BAND_260_HZ'],
                            ['184Hz', 'MPU6050_BAND_184_HZ'],
                            ['94Hz', 'MPU6050_BAND_94_HZ'],
                            ['44Hz', 'MPU6050_BAND_44_HZ'],
                            ['21Hz', 'MPU6050_BAND_21_HZ'],
                            ['10Hz', 'MPU6050_BAND_10_HZ'],
                            ['5Hz', 'MPU6050_BAND_5_HZ']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpu6050_readData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MPU6050_READDATA,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpu6050_acceleration = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MPU6050_ACCELERATION,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'AXIS',
                        options: [
                            ['x', 'x'],
                            ['y', 'y'],
                            ['z', 'z']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.mpu6050_gyro = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MPU6050_GYRO,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'AXIS',
                        options: [
                            ['x', 'x'],
                            ['y', 'y'],
                            ['z', 'z']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };


    Blockly.Blocks.mpu6050_temperature = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MPU6050_TEMPERATURE,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
