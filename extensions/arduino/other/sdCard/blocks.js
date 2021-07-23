/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#00DD77';
    const secondaryColour = '#00AA55';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.sdCard_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SDCARD_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'CS',
                        options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sdCard_openFile = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SDCARD_OPENFILE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.SDCARD_MODE_READ, 'FILE_READ'],
                            [Blockly.Msg.SDCARD_MODE_READWRITE, 'FILE_WRITE']
                        ]
                    }
                ],
                tooltip: Blockly.Msg.SDCARD_OPENFILE_TOOLTIP,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sdCard_closeFile = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SDCARD_CLOSEFILE,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sdCard_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SDCARD_PRINT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'EOL',
                        options: [
                            [Blockly.Msg.SDCARD_EOL_WARP, 'warp'],
                            [Blockly.Msg.SDCARD_EOL_NOWARP, 'no-warp']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sdCard_fileDataAvailable = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SDCARD_FILEDATAAVAILABLE,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.sdCard_readFileData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SDCARD_READFILEDATA,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.sdCard_isFileExists = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SDCARD_ISFILEEXISTS,
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

    Blockly.Blocks.sdCard_createFile = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SDCARD_CREATEFILE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sdCard_deleteFile = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SDCARD_DELETEFILE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
