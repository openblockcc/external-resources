/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SOFTWARESERIAL_CATEGORY}" id="SOFTWARESERIAL_CATEGORY" colour="#00D7B0" secondaryColour="#00BE96">
    <block type="softwareSerial_begin" id="softwareSerial_begin">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="RX">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="TX">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <field name="BAUD">9600</field>
    </block>
    <block type="softwareSerial_print" id="softwareSerial_print">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Hello OpenBlock</field>
            </shadow>
        </value>
    </block>
    <block type="softwareSerial_available" id="softwareSerial_available">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="softwareSerial_readAByte" id="softwareSerial_readAByte">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
