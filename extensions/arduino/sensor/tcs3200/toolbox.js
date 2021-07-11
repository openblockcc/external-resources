/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TCS3200_CATEGORY}" id="TCS3200_CATEGORY" colour="#AE00AE" secondaryColour="#930093">
    <block type="tcs3200_init" id="dht_init">
        <field name="S0">2</field>
        <field name="S1">3</field>
        <field name="S2">4</field>
        <field name="S3">6</field>
        <field name="OE">7</field>
    </block>
    <block type="tcs3200_calibrateWhite" id="tcs3200_calibrateWhite">
    </block>
    <block type="tcs3200_calibrateBlack" id="tcs3200_calibrateBlack">
    </block>
    <block type="tcs3200_measureColor" id="tcs3200_measureColor">
    </block>
    <block type="tcs3200_getColorValue" id="tcs3200_getColorValue">
    </block>
</category>`;
}

exports = addToolbox;
