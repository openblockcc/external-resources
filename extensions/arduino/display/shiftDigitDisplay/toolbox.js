/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SHIFTDIGITDISPLAY_CATEGORY}" id="SHIFTDIGITDISPLAY_CATEGORY" colour="#0072E3" secondaryColour="#005AB5">
    <block type="shiftDigitDisplay_init" id="shiftDigitDisplay_init">
        <value name="LEN">
            <shadow type="math_whole_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <field name="SCLK">2</field>
        <field name="RCLK">3</field>
        <field name="DIO">4</field>
    </block>
    <block type="shiftDigitDisplay_displayNumber" id="shiftDigitDisplay_displayNumber">
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">16</field>
            </shadow>
        </value>
        <value name="DECIMAL">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="shiftDigitDisplay_displayString" id="shiftDigitDisplay_displayString">
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Open</field>
            </shadow>
        </value>
    </block>
    <block type="shiftDigitDisplay_show" id="shiftDigitDisplay_show">
        <value name="TIME">
            <shadow type="math_integer">
                <field name="NUM">1000</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
