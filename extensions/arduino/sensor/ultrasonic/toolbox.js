/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_ULTRASONIC_CATEGORY}" id="ULTRASONIC_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="ultrasonic_readDistance" id="ultrasonic_readDistance">
        <field name="TRIG">2</field>
        <field name="ECHO">3</field>
    </block>
</category>    `;
}
exports = addToolbox;
