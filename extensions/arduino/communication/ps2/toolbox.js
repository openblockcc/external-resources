/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_PS2_CATEGORY}" id="PS2_CATEGORY" colour="#FF3399" secondaryColour="#C71585">
    <block type="ps2_init" id="ps2_init">
        <field name="DIN">2</field>
        <field name="DOUT">3</field>
        <field name="CS">4</field>
        <field name="CLK">5</field>
    </block>
    <block type="ps2_readData" id="ps2_readData">
    </block>
    <block type="ps2_getButton" id="ps2_getButton">
    </block>
    <block type="ps2_GetJoystick" id="ps2_GetJoystick">
    </block>
</category>`;
}

exports = addToolbox;
