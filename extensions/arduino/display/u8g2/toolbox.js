/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_U8G2_CATEGORY}" id="U8G2_CATEGORY" colour="#FF7014" secondaryColour="#E1640A">
    <block type="u8g2_12864LCD_init" id="u8g2_12864LCD_init">
        <field name="RS">2</field>
        <field name="R/W">3</field>
        <field name="E">4</field>
    </block>
    <block type="u8g2_12864Oled_init" id="u8g2_12864Oled_init">
        <field name="SCL">2</field>
        <field name="SDA">3</field>
    </block>
    <block type="u8g2_12832oled_init" id="u8g2_12832oled_init">
        <field name="SCL">2</field>
        <field name="SDA">3</field>
    </block>
    <sep gap="36"/>
    <block type="u8g2_clear" id="u8g2_clear"></block>
    <block type="u8g2_refresh" id="u8g2_refresh"></block>
    <sep gap="36"/>
    <block type="u8g2_drawPixel" id="u8g2_drawPixel">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="u8g2_drawVHLine" id="u8g2_drawVHLine">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="LEN">
            <shadow type="math_whole_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="u8g2_drawLine" id="u8g2_drawLine">
        <value name="X0">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y0">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="X1">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="Y1">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="u8g2_drawRectangle" id="u8g2_drawRectangle">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="W">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="H">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="u8g2_drawRoundRectangle" id="u8g2_drawRoundRectangle">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="W">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="H">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="R">
            <shadow type="math_whole_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
    </block>
    <block type="u8g2_drawCircle" id="u8g2_drawCircle">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="R">
            <shadow type="math_whole_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="u8g2_drawEllipse" id="u8g2_drawEllipse">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="W">
            <shadow type="math_whole_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="H">
            <shadow type="math_whole_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
    </block>
    <block type="u8g2_drawTriangle" id="u8g2_drawTriangle">

        <value name="X0">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y0">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="X1">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="Y1">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="X2">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="Y2">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="u8g2_setFont" id="u8g2_setFont"></block>
    <block type="u8g2_drawString" id="u8g2_drawString">
        <value name="STR">
            <shadow type="text">
                <field name="TEXT">Hello Openblock</field>
            </shadow>
        </value>
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="u8g2_setCursor" id="u8g2_setCursor">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="u8g2_print" id="u8g2_print">
        <value name="STR">
            <shadow type="text">
                <field name="TEXT">Hello Openblock</field>
            </shadow>
        </value>
    </block>
    <sep gap="36"/>
    <block type="u8g2_setDrawColor" id="u8g2_setDrawColor"></block>
    <block type="u8g2_setDisplayRotation" id="u8g2_setDisplayRotation"></block>
</category>`;
}

exports = addToolbox;
