/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SDCARD_CATEGORY}" id="SDCARD_CATEGORY" colour="#00DD77" secondaryColour="#00AA55">
    <block type="sdCard_init" id="sdCard_init">
        <field name="CS">2</field>
    </block>
    <block type="sdCard_openFile" id="sdCard_openFile">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">OB.txt</field>
            </shadow>
        </value>
    </block>
    <block type="sdCard_closeFile" id="sdCard_closeFile"></block>
    <block type="sdCard_print" id="sdCard_print">
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Hello Openblock</field>
            </shadow>
        </value>
    </block>
    <block type="sdCard_fileDataAvailable" id="sdCard_fileDataAvailable"></block>
    <block type="sdCard_readFileData" id="sdCard_readFileData"></block>
    <block type="sdCard_isFileExists" id="sdCard_isFileExists">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">OB.txt</field>
            </shadow>
        </value>
    </block>
    <block type="sdCard_createFile" id="sdCard_createFile">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">OB.txt</field>
            </shadow>
        </value>
    </block>
    <block type="sdCard_deleteFile" id="sdCard_deleteFile">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">OB.txt</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
