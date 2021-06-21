/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#0072E3';
    const secondaryColour = '#005AB5';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.shiftDigitDisplay_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SHIFTDIGITDISPLAY_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'LEN'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'SCLK',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RCLK',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIO',
                        options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.shiftDigitDisplay_displayNumber = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SHIFTDIGITDISPLAY_DISPLAYNUMBER,
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

    Blockly.Blocks.shiftDigitDisplay_displayString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SHIFTDIGITDISPLAY_DISPLAYSTRING,
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

    Blockly.Blocks.shiftDigitDisplay_show = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SHIFTDIGITDISPLAY_SHOW,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                tooltip: Blockly.Msg.SHIFTDIGITDISPLAY_REFRESH_TOOLTIP,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
