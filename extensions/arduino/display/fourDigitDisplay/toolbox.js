/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_FOURDIGITDISPLAY_CATEGORY}" id="FOURDIGITDISPLAY_CATEGORY" colour="#FF7F50" secondaryColour="#FF6347">
    <block type="fourDigitDisplay_init" id="fourDigitDisplay_init">
        <field name="DIO">2</field>
        <field name="CLK">3</field>
    </block>
    <block type="fourDigitDisplay_setBrightness" id="fourDigitDisplay_setBrightness">
        <value name="BRT">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
    <block type="fourDigitDisplay_displayNumber" id="fourDigitDisplay_displayNumber">
        <value name="DATA">
            <shadow type="math_number">
                <field name="NUM">1024</field>
            </shadow>
        </value>
    </block>
    <block type="fourDigitDisplay_displayString" id="fourDigitDisplay_displayString">
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Open</field>
            </shadow>
        </value>
    </block>
    <block type="fourDigitDisplay_display" id="fourDigitDisplay_display">
        <value name="DATA">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="fourDigitDisplay_setPoint" id="fourDigitDisplay_setPoint">
    </block>
    <block type="fourDigitDisplay_clear" id="fourDigitDisplay_clear">
    </block>
</category>`;
}

exports = addToolbox;
