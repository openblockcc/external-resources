/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SOFTWARESERIAL_CATEGORY}" id="SOFTWARESERIAL_CATEGORY" colour="#00D7B0" secondaryColour="#00D7B0">
    <block type="softwareSerial_begin" id="softwareSerial_begin">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="rx">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="tx">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <field name="baudrate">4800</field>
    </block>
    <block type="softwareSerial_print" id="softwareSerial_print">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="data">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>
    <block type="softwareSerial_available" id="softwareSerial_available">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="softwareSerial_readAByte" id="softwareSerial_readAByte">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
