/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#A0522D';
    const secondaryColour = '#8B4513';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.eightDigitDisplay_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EIGHTDIGITDISPLAY_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CS',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CLK',
                        options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.eightDigitDisplay_displayNumber = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EIGHTDIGITDISPLAY_DISPLAYNUMBER,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NUM'
                    },
                    {
                        type: 'input_value',
                        name: 'DECIMAL'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.eightDigitDisplay_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EIGHTDIGITDISPLAY_SETBRIGHTNESS,
                args0: [
                    {
                        type: 'input_value',
                        name: 'BRT'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.eightDigitDisplay_brightnessNumber = {
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
                        max: '15'
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

    Blockly.Blocks.eightDigitDisplay_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EIGHTDIGITDISPLAY_CLEAR,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
