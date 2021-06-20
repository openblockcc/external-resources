/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_FOURDIGITCLOCKDISPLAY_CATEGORY}" id="FOURDIGITCLOCKDISPLAY_CATEGORY" colour="#FF7F50" secondaryColour="#FF6347">
    <block type="fourDigitClockDisplay_init" id="fourDigitClockDisplay_init">
        <field name="DIO">2</field>
        <field name="CLK">3</field>
    </block>
    <block type="fourDigitClockDisplay_displayNumber" id="fourDigitClockDisplay_displayNumber">
        <value name="DATA">
            <shadow type="math_integer">
                <field name="NUM">1024</field>
            </shadow>
        </value>
    </block>
    <block type="fourDigitClockDisplay_displayString" id="fourDigitClockDisplay_displayString">
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Open</field>
            </shadow>
        </value>
    </block>
    <block type="fourDigitClockDisplay_display" id="fourDigitClockDisplay_display">
        <value name="DATA">
            <shadow type="math_integer">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="fourDigitClockDisplay_clear" id="fourDigitClockDisplay_clear">
    </block>
    <block type="fourDigitClockDisplay_setBrightness" id="fourDigitClockDisplay_setBrightness">
        <value name="BRT">
            <shadow type="fourDigitClockDisplay_brightnessNumber">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
    <block type="fourDigitClockDisplay_setPoint" id="fourDigitClockDisplay_setPoint">
    </block>
</category>`;
}

exports = addToolbox;
