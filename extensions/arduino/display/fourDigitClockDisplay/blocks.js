/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#FF7F50';
    const secondaryColour = '#FF6347';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.fourDigitClockDisplay_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DIO',
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

    Blockly.Blocks.fourDigitClockDisplay_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_SETBRIGHTNESS,
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

    Blockly.Blocks.fourDigitClockDisplay_brightnessNumber = {
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
                        max: '7'
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

    Blockly.Blocks.fourDigitClockDisplay_displayNumber = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_DISPLAYNUMBER,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DATA'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.fourDigitClockDisplay_displayString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_DISPLAYSTRING,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DATA'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.fourDigitClockDisplay_display = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_DISPLAY,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            ['1', '0'],
                            ['2', '1'],
                            ['3', '2'],
                            ['4', '3']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.fourDigitClockDisplay_setPoint = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_SETPOINT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STA',
                        options: [
                            [Blockly.Msg.FOURDIGITCLOCKDISPLAY_STATE_ON, 'true'],
                            [Blockly.Msg.FOURDIGITCLOCKDISPLAY_STATE_OFF, 'false']
                        ]
                    }
                ],
                tooltip: Blockly.Msg.FOURDIGITCLOCKDISPLAY_SETPOINT_TOOLTIP,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.fourDigitClockDisplay_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_CLEAR,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
