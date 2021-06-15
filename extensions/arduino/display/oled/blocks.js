/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#C0C0C0';
    const secondaryColour = '#A9A9A9';

    Blockly.Blocks.oled_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'W'
                    },
                    {
                        type: 'input_value',
                        name: 'H'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ADDR',
                        options: [
                            ['0x78 (0x3c)', '0x3c'],
                            ['0x7a (0x3d)', '0x3d']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_drawLine = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_DRAWLINE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X0'
                    },
                    {
                        type: 'input_value',
                        name: 'Y0'
                    },
                    {
                        type: 'input_value',
                        name: 'X1'
                    },
                    {
                        type: 'input_value',
                        name: 'Y1'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_drawRect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_DRAWRECT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'W'
                    },
                    {
                        type: 'input_value',
                        name: 'H'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_fillRect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_FILLRECT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'W'
                    },
                    {
                        type: 'input_value',
                        name: 'H'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_drawCircle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_DRAWCIRCLE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_fillCircle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_FILLCIRCLE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_drawRoundRect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_DRAWROUNDRECT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'W'
                    },
                    {
                        type: 'input_value',
                        name: 'H'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_fillRoundRect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_FILLROUNDRECT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'W'
                    },
                    {
                        type: 'input_value',
                        name: 'H'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_drawTriangle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_DRAWTRIANGLE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X0'
                    },
                    {
                        type: 'input_value',
                        name: 'Y0'
                    },
                    {
                        type: 'input_value',
                        name: 'X1'
                    },
                    {
                        type: 'input_value',
                        name: 'Y1'
                    },
                    {
                        type: 'input_value',
                        name: 'X2'
                    },
                    {
                        type: 'input_value',
                        name: 'Y2'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_fillTriangle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_FILLTRIANGLE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X0'
                    },
                    {
                        type: 'input_value',
                        name: 'Y0'
                    },
                    {
                        type: 'input_value',
                        name: 'X1'
                    },
                    {
                        type: 'input_value',
                        name: 'Y1'
                    },
                    {
                        type: 'input_value',
                        name: 'X2'
                    },
                    {
                        type: 'input_value',
                        name: 'Y2'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_setText = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_SETTEXT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SIZE',
                        options: [
                            ['6x8', '1'],
                            ['12x16', '2'],
                            ['18x24', '3'],
                            ['24x32', '4'],
                            ['30x40', '5'],
                            ['36x48', '6'],
                            ['42x56', '7'],
                            ['48x64', '8']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'BGCOLOR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_setCursor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_SETCURSOR,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_PRINT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'EOL',
                        options: [
                            [Blockly.Msg.OLED_EOL_WARP, 'warp'],
                            [Blockly.Msg.OLED_EOL_NOWARP, 'noWarp']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_CLEAR,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_refresh = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_REFRESH,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_startScroll = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_STARTSCROLL,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.OLED_SCROLL_RIGHT, '0'],
                            [Blockly.Msg.OLED_SCROLL_LEFT, '1'],
                            [Blockly.Msg.OLED_SCROLL_DIAGRIGHT, '2'],
                            [Blockly.Msg.OLED_SCROLL_DIAGLEFT, '3']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Y0',
                        options: [
                            ['0', '0x00'],
                            ['8', '0x01'],
                            ['16', '0x02'],
                            ['24', '0x03'],
                            ['32', '0x04'],
                            ['10', '0x05'],
                            ['48', '0x06'],
                            ['56', '0x07']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Y1',
                        options: [
                            ['8', '0x00'],
                            ['16', '0x01'],
                            ['24', '0x02'],
                            ['32', '0x03'],
                            ['40', '0x04'],
                            ['48', '0x05'],
                            ['56', '0x06'],
                            ['64', '0x07']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_stopScroll = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_STOPSCROLL,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
