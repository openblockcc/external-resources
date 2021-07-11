/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_MAX6675_CATEGORY}" id="MAX6675_CATEGORY" colour="#007979" secondaryColour="#005757">
    <block type="max6675_init" id="max6675_init">
        <field name="DO">2</field>
        <field name="CLK">3</field>
        <field name="CS">4</field>
    </block>
    <block type="max6675_readTemperature" id="max6675_readTemperature"></block>
</category>`;
}

exports = addToolbox;
