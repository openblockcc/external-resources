/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_EIGHTDIGITDISPLAY_CATEGORY}" id="EIGHTDIGITDISPLAY_CATEGORY" colour="#A0522D" secondaryColour="#8B4513">
    <block type="eightDigitDisplay_init" id="eightDigitDisplay_init">
        <field name="DIN">2</field>
        <field name="CS">3</field>
        <field name="CLK">4</field>
    </block>
    <block type="eightDigitDisplay_displayNumber" id="eightDigitDisplay_displayNumber">
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">1024</field>
            </shadow>
        </value>
        <value name="DECIMAL">
            <shadow type="math_whole_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
    <block type="eightDigitDisplay_clear" id="eightDigitDisplay_clear">
    </block>
    <block type="eightDigitDisplay_setBrightness" id="eightDigitDisplay_setBrightness">
        <value name="BRT">
            <shadow type="eightDigitDisplay_brightnessNumber">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
