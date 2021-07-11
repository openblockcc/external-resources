/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DS18B20_CATEGORY}" id="DS18B20_CATEGORY" colour="#009393" secondaryColour="#007979">
    <block type="ds18b20_init" id="ds18b20_init">
        <field name="PIN">2</field>
        <value name="QUANTITY">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="ds18b20_readAllTemperatures" id="ds18b20_readAllTemperatures">
    </block>
    <block type="ds18b20_temperature" id="ds18b20_temperature">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
