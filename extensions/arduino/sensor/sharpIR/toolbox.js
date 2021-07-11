/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SHARPIR_CATEGORY}" id="SHARPIR_CATEGORY" colour="#9F0050" secondaryColour="#820041">
    <block type="sharpIR_init" id="sharpIR_init">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <field name="PIN">A0</field>
    </block>
    <block type="sharpIR_readDistance" id="sharpIR_readDistance">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
