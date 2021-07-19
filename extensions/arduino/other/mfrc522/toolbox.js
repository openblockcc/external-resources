/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_MFRC522_CATEGORY}" id="MFRC522_CATEGORY" colour="#F00078" secondaryColour="#D9006C">
    <block type="mfrc522_init" id="mfrc522_init">
        <field name="SDA">2</field>
        <field name="RST">3</field>
    </block>
    <block type="control_if" id="control_if">
        <value name="CONDITION">
            <block type="mfrc522_isNewCardPresent" id="mfrc522_isNewCardPresent">
            </block>
        </value>
        <statement name="SUBSTACK">
            <block type="control_if" id="control_if">
                <value name="CONDITION">
                    <block type="mfrc522_readCardSerial" id="mfrc522_readCardSerial">
                    </block>
                </value>
                <statement name="SUBSTACK">
                </statement>
            </block>
        </statement>
    </block>
    <block type="mfrc522_getCardTypeName" id="mfrc522_getCardTypeName"></block>
    <block type="mfrc522_getCardUid" id="mfrc522_getCardUid"></block>
    <block type="mfrc522_numberToHexString" id="mfrc522_numberToHexString">
        <value name="NUM">
            <block type="mfrc522_getCardUid" id="mfrc522_getCardUid"></block>
        </value>
    </block>
    <block type="control_if" id="control_if">
        <value name="CONDITION">
            <block type="mfrc522_verificationKey" id="mfrc522_verificationKey">
                <value name="BLOCK">
                    <shadow type="mfrc522_blockNumber">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
        </value>
        <statement name="SUBSTACK">
        </statement>
    </block>
    <block type="control_if" id="control_if">
        <value name="CONDITION">
            <block type="mfrc522_readBlockData" id="mfrc522_readBlockData">
                <value name="BLOCK">
                    <shadow type="mfrc522_blockNumber">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
        </value>
        <statement name="SUBSTACK">
        </statement>
    </block>
    <block type="mfrc522_getBlockData" id="mfrc522_getBlockData"></block>
    <block type="mfrc522_writeBlockData" id="mfrc522_writeBlockData">
        <value name="BLOCK">
            <shadow type="mfrc522_blockNumber">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">1024</field>
            </shadow>
        </value>
    </block>
    <block type="mfrc522_setKey" id="mfrc522_setKey">
        <value name="KEY">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="mfrc522_writeKeyToSector" id="mfrc522_writeKeyToSector">
        <value name="KEY">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="SECTOR">
            <shadow type="mfrc522_sectorNumber">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="mfrc522_printSectorData" id="mfrc522_printSectorData">
        <value name="SECTOR">
            <shadow type="mfrc522_sectorNumber">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="mfrc522_halt" id="mfrc522_halt"></block>
</category>`;
}

exports = addToolbox;
