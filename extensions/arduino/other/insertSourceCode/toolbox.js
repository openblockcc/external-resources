/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_INSERTSOURCECODE_CATEGORY}" id="INSERTSOURCECODE_CATEGORY" colour="#5B5B5B" secondaryColour="#3C3C3C">
    <block type="insertSourceCode_commandBlock" id="insertSourceCode_commandBlock">
        <value name="CODE">
            <shadow type="text">
                <field name="TEXT">pinMode(0, INPUT);</field>
            </shadow>
        </value>
    </block>
    <block type="insertSourceCode_roundBlock" id="insertSourceCode_roundBlock">
        <value name="CODE">
            <shadow type="text">
                <field name="TEXT">"Hello OpenBlock"</field>
            </shadow>
        </value>
    </block>
    <block type="insertSourceCode_booleanBlock" id="insertSourceCode_booleanBlock">
        <value name="CODE">
            <shadow type="text">
                <field name="TEXT">digitalRead(0)</field>
            </shadow>
        </value>
    </block>
    <block type="insertSourceCode_insertInIncludeArea" id="insertSourceCode_insertInIncludeArea">
        <value name="CODE">
            <shadow type="text">
                <field name="TEXT">#include "example.h"</field>
            </shadow>
        </value>
    </block>
    <block type="insertSourceCode_insertInDefineArea" id="insertSourceCode_insertInDefineArea">
        <value name="CODE">
            <shadow type="text">
                <field name="TEXT">uint8_t example = 0;</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
