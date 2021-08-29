/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_EITGHTTIMESEIGHTMATIRXDISPLAY_CATEGORY}" id="EITGHTTIMESEIGHTMATIRXDISPLAY_CATEGORY" colour="#CE0000" secondaryColour="#AE0000">
    <block type="eitghtTimesEightMatirxDisplay_init" id="eitghtTimesEightMatirxDisplay_init">
        <field name="CS">2</field>
    </block>
    <sep gap="36"/>
    <block type="eitghtTimesEightMatirxDisplay_drawPixel" id="eitghtTimesEightMatirxDisplay_drawPixel">
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
    </block>
    <block type="eitghtTimesEightMatirxDisplay_drawLine" id="eitghtTimesEightMatirxDisplay_drawLine">
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
                <field name="NUM">7</field>
            </shadow>
        </value>
        <value name="Y1">
            <shadow type="math_whole_number">
                <field name="NUM">7</field>
            </shadow>
        </value>
    </block>
    <block type="eitghtTimesEightMatirxDisplay_showChar" id="eitghtTimesEightMatirxDisplay_showChar">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">A</field>
            </shadow>
        </value>
    </block>
    <block type="eitghtTimesEightMatirxDisplay_showNumber" id="eitghtTimesEightMatirxDisplay_showNumber">
        <value name="NUMBER">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="eitghtTimesEightMatirxDisplay_fill" id="eitghtTimesEightMatirxDisplay_fill"></block>
    <block type="eitghtTimesEightMatirxDisplay_refresh" id="eitghtTimesEightMatirxDisplay_refresh"></block>
    <sep gap="36"/>
    <block type="eitghtTimesEightMatirxDisplay_setBrightness" id="eitghtTimesEightMatirxDisplay_setBrightness">
        <value name="BRT">
            <shadow type="eitghtTimesEightMatirxDisplay_brightnessNumber">
                <field name="NUM">7</field>
            </shadow>
        </value>
    </block>
    <block type="eitghtTimesEightMatirxDisplay_setRotation" id="eitghtTimesEightMatirxDisplay_setRotation"></block>
</category>`;
}

exports = addToolbox;
