/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#007979';
    const secondaryColour = '#005757';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.max6675_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MAX6675_INIT, // init max6675 pin DO %1 CLK %2 CS %3
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DO',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CLK',
                        options: digitalPins
                    },

                    {
                        type: 'field_dropdown',
                        name: 'CS',
                        options: digitalPins
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.max6675_readTemperature = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MAX6675_READTEMPERATURE, // max6675 read temperature %1
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'UNIT',
                        options: [
                            ['℃', 'false'],
                            ['℉', 'true']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
