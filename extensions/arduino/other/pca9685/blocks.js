/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#9F4D95';
    const secondaryColour = '#8F4586';

    const channel = [
        ['0', '0'],
        ['1', '1'],
        ['2', '2'],
        ['3', '3'],
        ['4', '4'],
        ['5', '5'],
        ['6', '6'],
        ['7', '7'],
        ['8', '8'],
        ['9', '9'],
        ['10', '10'],
        ['11', '11'],
        ['12', '12'],
        ['13', '13'],
        ['14', '14'],
        ['15', '15']
    ];

    Blockly.Blocks.pca9685_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PCA9685_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ADDR'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.pca9685_addressNumber = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_slider',
                        name: 'NUM',
                        value: '0',
                        precision: 1,
                        min: '0',
                        max: '127'
                    }
                ],
                output: 'Number',
                outputShape: Blockly.OUTPUT_SHAPE_ROUND,
                colour: Blockly.Colours.textField,
                colourSecondary: Blockly.Colours.textField,
                colourTertiary: Blockly.Colours.textField
            });
        }
    };

    Blockly.Blocks.pca9685_setToServoMode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PCA9685_SETTOSERVOMODE,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.pca9685_setServoAngle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PCA9685_SETSERVOANGLE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'CH',
                        options: channel
                    },
                    {
                        type: 'input_value',
                        name: 'ANGLE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.pca9685_setAllServoAngle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PCA9685_SETALLSERVOANGLE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ANGLE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.pca9685_setPWMFrequency = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PCA9685_SETPWMFREQUENCY,
                args0: [
                    {
                        type: 'input_value',
                        name: 'FREQ'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.pca9685_setPWMFrequencyNumber = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_slider',
                        name: 'NUM',
                        value: '200',
                        precision: 1,
                        min: '24',
                        max: '1526'
                    }
                ],
                output: 'Number',
                outputShape: Blockly.OUTPUT_SHAPE_ROUND,
                colour: Blockly.Colours.textField,
                colourSecondary: Blockly.Colours.textField,
                colourTertiary: Blockly.Colours.textField
            });
        }
    };

    Blockly.Blocks.pca9685_setChannelPWM = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PCA9685_SETCHANNELPWM,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'CH',
                        options: channel
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.pca9685_setAllChannelPWM = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PCA9685_SETALLCHANNELPWM,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.pca9685_setPWMValueNumber = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_slider',
                        name: 'NUM',
                        value: '0',
                        precision: 1,
                        min: '0',
                        max: '4096'
                    }
                ],
                output: 'Number',
                outputShape: Blockly.OUTPUT_SHAPE_ROUND,
                colour: Blockly.Colours.textField,
                colourSecondary: Blockly.Colours.textField,
                colourTertiary: Blockly.Colours.textField
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
