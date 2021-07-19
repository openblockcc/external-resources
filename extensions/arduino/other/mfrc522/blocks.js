/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#F00078';
    const secondaryColour = '#D9006C';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.mfrc522_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SDA',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RST',
                        options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mfrc522_isNewCardPresent = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_ISNEWCARDPRESENT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.mfrc522_readCardSerial = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_READCARDSERIAL,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.mfrc522_getCardTypeName = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_GETCARDTYPENAME,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.mfrc522_getCardUid = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_GETCARDUID,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.mfrc522_numberToHexString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_NUMBERTOHEXSTRING,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.mfrc522_verificationKey = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_VERIFICATIONKEY,
                args0: [
                    {
                        type: 'input_value',
                        name: 'BLOCK'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.mfrc522_blockNumber = {
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
                        max: '63'
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

    Blockly.Blocks.mfrc522_readBlockData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_READBLOCKDATA,
                args0: [
                    {
                        type: 'input_value',
                        name: 'BLOCK'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.mfrc522_getBlockData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_GETBLOCKDATA,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.MFRC522_DATATYPE_NUBMER, 'number'],
                            [Blockly.Msg.MFRC522_DATATYPE_STRING, 'string']
                        ]
                    }
                ],
                tooltip: Blockly.Msg.MFRC522_GETBLOCKDATA_TOOLTIP,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.mfrc522_writeBlockData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_WRITEBLOCKDATA,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'input_value',
                        name: 'BLOCK'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.MFRC522_DATATYPE_NUBMER, 'number'],
                            [Blockly.Msg.MFRC522_DATATYPE_STRING, 'string']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mfrc522_setKey = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_SETKEY,
                args0: [
                    {
                        type: 'input_value',
                        name: 'KEY'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mfrc522_writeKeyToSector = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_WRITEKEYTOSECTOR,
                args0: [
                    {
                        type: 'input_value',
                        name: 'KEY'
                    },
                    {
                        type: 'input_value',
                        name: 'SECTOR'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mfrc522_sectorNumber = {
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

    Blockly.Blocks.mfrc522_printSectorData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_PRINTSECTORDATA,
                args0: [
                    {
                        type: 'input_value',
                        name: 'SECTOR'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mfrc522_halt = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MFRC522_HALT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
