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

    Blockly.Blocks.fourDigitDisplay_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITDISPLAY_INIT,
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

    Blockly.Blocks.fourDigitDisplay_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITDISPLAY_SETBRIGHTNESS,
                args0: [
                    {
                        type: 'input_value',
                        name: 'BRT'
                    }
                ],
                tooltip: '0 ~ 7',
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.fourDigitDisplay_displayNumber = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITDISPLAY_DISPLAYNUMBER,
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

    Blockly.Blocks.fourDigitDisplay_displayString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITDISPLAY_DISPLAYSTRING,
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

    Blockly.Blocks.fourDigitDisplay_display = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITDISPLAY_DISPLAY,
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

    Blockly.Blocks.fourDigitDisplay_setPoint = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITDISPLAY_SETPOINT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STA',
                        options: [
                            [Blockly.Msg.FOURDIGITDISPLAY_STATE_ON, 'true'],
                            [Blockly.Msg.FOURDIGITDISPLAY_STATE_OFF, 'false']
                        ]
                    }
                ],
                tooltip: Blockly.Msg.FOURDIGITDISPLAY_SETPOINT_TOOLTIP,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.fourDigitDisplay_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITDISPLAY_CLEAR,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
