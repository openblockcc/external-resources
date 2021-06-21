/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#FF79BC';
    const secondaryColour = '#FF359A';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.nrf24l01_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.NRF24L01_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'CE',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CSN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'ID'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.nrf24l01_sendNumber = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.NRF24L01_SENDNUMBER,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'input_value',
                        name: 'ID'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.nrf24l01_sendString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.NRF24L01_SENDSTRING,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'input_value',
                        name: 'ID'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.nrf24l01_sendValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.NRF24L01_SENDVALUE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
                    {
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'input_value',
                        name: 'ID'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.nrf24l01_hasData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.NRF24L01_HASDATA,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.nrf24l01_readData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.NRF24L01_READDATA,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.nrf24l01_parseNumber = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.NRF24L01_PARSENUMBER,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.nrf24l01_parseString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.NRF24L01_PARSESTRING,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.nrf24l01_valueAvailable = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.NRF24L01_VALUEAVAILABLE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.nrf24l01_parseValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.NRF24L01_PARSEVALUE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
