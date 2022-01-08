/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#FF7014';
    const secondaryColour = '#E1640A';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.u8g2_12864LCD_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_12864LCD_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'RS',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'R/W',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'E',
                        options: digitalPins
                    }
                ],
                tooltip: Blockly.Msg.U8G2_12864LCD_INIT_TOOLTIP,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_12864Oled_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_12864OLED_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SCL',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'SDA',
                        options: digitalPins
                    }
                ],
                tooltip: Blockly.Msg.U8G2_OLED_INIT_TOOLTIP,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_12832oled_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_12832OLED_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SCL',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'SDA',
                        options: digitalPins
                    }
                ],
                tooltip: Blockly.Msg.U8G2_OLED_INIT_TOOLTIP,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_setDrawColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_SETDRAWCOLOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            [Blockly.Msg.U8G2_COLOR_COLORED, '1'],
                            [Blockly.Msg.U8G2_COLOR_NOCOLORED, '0']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_drawPixel = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_DRAWPIXEL,
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

    Blockly.Blocks.u8g2_drawVHLine = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_DRAWVHLINE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STYLE',
                        options: [
                            [Blockly.Msg.U8G2_STYLE_VERTICAL, 'vertical'],
                            [Blockly.Msg.U8G2_STYLE_HORIZONTAL, 'horizontal']
                        ]
                    },
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
                        name: 'LEN'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_drawLine = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_DRAWLINE,
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
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_drawRectangle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_DRAWRECTANGLE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STYLE',
                        options: [
                            [Blockly.Msg.U8G2_STYLE_NOFILLED, 'no-filled'],
                            [Blockly.Msg.U8G2_STYLE_FILLED, 'filled']
                        ]
                    },
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
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_drawRoundRectangle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_DRAWROUNDRECTANGLE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STYLE',
                        options: [
                            [Blockly.Msg.U8G2_STYLE_NOFILLED, 'no-filled'],
                            [Blockly.Msg.U8G2_STYLE_FILLED, 'filled']
                        ]
                    },
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
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_drawCircle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_DRAWCIRCLE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STYLE',
                        options: [
                            [Blockly.Msg.U8G2_STYLE_NOFILLED, 'no-filled'],
                            [Blockly.Msg.U8G2_STYLE_FILLED, 'filled']
                        ]
                    },
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
                        name: 'PART',
                        options: [
                            [Blockly.Msg.U8G2_PART_ALL, 'U8G2_DRAW_ALL'],
                            [Blockly.Msg.U8G2_PART_UPPER_RIGHT, 'U8G2_DRAW_UPPER_RIGHT'],
                            [Blockly.Msg.U8G2_PART_UPPER_LEFT, 'U8G2_DRAW_UPPER_LEFT'],
                            [Blockly.Msg.U8G2_PART_LOWER_LEFT, 'U8G2_DRAW_LOWER_LEFT'],
                            [Blockly.Msg.U8G2_PART_LOWER_RIGHT, 'U8G2_DRAW_LOWER_RIGHT']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_drawEllipse = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_DRAWELLIPSE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STYLE',
                        options: [
                            [Blockly.Msg.U8G2_STYLE_NOFILLED, 'no-filled'],
                            [Blockly.Msg.U8G2_STYLE_FILLED, 'filled']
                        ]
                    },
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
                        name: 'PART',
                        options: [
                            [Blockly.Msg.U8G2_PART_ALL, 'U8G2_DRAW_ALL'],
                            [Blockly.Msg.U8G2_PART_UPPER_RIGHT, 'U8G2_DRAW_UPPER_RIGHT'],
                            [Blockly.Msg.U8G2_PART_UPPER_LEFT, 'U8G2_DRAW_UPPER_LEFT'],
                            [Blockly.Msg.U8G2_PART_LOWER_LEFT, 'U8G2_DRAW_LOWER_LEFT'],
                            [Blockly.Msg.U8G2_PART_LOWER_RIGHT, 'U8G2_DRAW_LOWER_RIGHT']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_drawTriangle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_DRAWTRIANGLE,
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
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_setFont = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_SETFONT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'FONT',
                        options: [
                            // en only font
                            [Blockly.Msg.U8G2_FONT_4X6, 'u8g2_font_4x6_mf'],
                            [Blockly.Msg.U8G2_FONT_5X7, 'u8g2_font_5x7_mf'],
                            [Blockly.Msg.U8G2_FONT_5X8, 'u8g2_font_5x8_mf'],
                            [Blockly.Msg.U8G2_FONT_6X10, 'u8g2_font_6x10_mf'],
                            [Blockly.Msg.U8G2_FONT_6X12, 'u8g2_font_6x12_mf'],
                            [Blockly.Msg.U8G2_FONT_6X13, 'u8g2_font_6x13_mf'],
                            [Blockly.Msg.U8G2_FONT_7X13, 'u8g2_font_7x13_mf'],
                            [Blockly.Msg.U8G2_FONT_7X14, 'u8g2_font_7x14_mf'],
                            [Blockly.Msg.U8G2_FONT_8X13, 'u8g2_font_8x13_mf'],
                            [Blockly.Msg.U8G2_FONT_9X15, 'u8g2_font_9x15_mf'],
                            [Blockly.Msg.U8G2_FONT_9X18, 'u8g2_font_9x18_mf'],
                            [Blockly.Msg.U8G2_FONT_10X20, 'u8g2_font_10x20_mf'],
                            // zh support font
                            [Blockly.Msg.U8G2_FONT_11X11C, 'u8g2_font_wqy12_t_chinese2'],
                            [Blockly.Msg.U8G2_FONT_13X13C, 'u8g2_font_wqy13_t_chinese2'],
                            [Blockly.Msg.U8G2_FONT_14X14C, 'u8g2_font_wqy14_t_chinese2'],
                            [Blockly.Msg.U8G2_FONT_15X15C, 'u8g2_font_wqy15_t_chinese2'],
                            [Blockly.Msg.U8G2_FONT_16X16C, 'u8g2_font_wqy16_t_chinese2']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [
                            ['0°', '0'],
                            ['90°', '1'],
                            ['180°', '2'],
                            ['270°', '3']
                        ]
                    }
                ],
                tooltip: Blockly.Msg.U8G2_SETFONT_TOOLTIP,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_drawString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_DRAWSTRING,
                args0: [
                    {
                        type: 'input_value',
                        name: 'STR'
                    },
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

    Blockly.Blocks.u8g2_setCursor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_SETCURSOR,
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

    Blockly.Blocks.u8g2_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_PRINT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'STR'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_CLEAR,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_refresh = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_REFRESH,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.u8g2_setDisplayRotation = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.U8G2_SETDISPLAYROTATION,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [
                            ['0°', 'U8G2_R0'],
                            ['90°', 'U8G2_R1'],
                            ['180°', 'U8G2_R2'],
                            ['270°', 'U8G2_R3'],
                            [Blockly.Msg.U8G2_DISPLAYROTATION_MIRROR, 'U8G2_MIRROR']
                        ]
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
