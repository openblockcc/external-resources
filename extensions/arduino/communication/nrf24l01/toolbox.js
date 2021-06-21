/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_NRF24L01_CATEGORY}" id="NRF24L01_CATEGORY" colour="#FF79BC" secondaryColour="#FF359A">
    <block type="nrf24l01_init" id="nrf24l01_init">
        <field name="CE">2</field>
        <field name="CSN">3</field>
        <value name="ID">
            <shadow type="math_uint8_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="nrf24l01_sendNumber" id="nrf24l01_sendNumber">
        <value name="DATA">
            <shadow type="math_number">
                <field name="NUM">1024</field>
            </shadow>
        </value>
        <value name="ID">
            <shadow type="math_uint8_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="nrf24l01_sendString" id="nrf24l01_sendString">
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Hello Openblock</field>
            </shadow>
        </value>
        <value name="ID">
            <shadow type="math_uint8_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="nrf24l01_sendValue" id="nrf24l01_sendValue">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">H</field>
            </shadow>
        </value>
        <value name="DATA">
            <shadow type="math_number">
                <field name="NUM">1024</field>
            </shadow>
        </value>
        <value name="ID">
            <shadow type="math_uint8_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="control_if" id="control_if">
        <value name="CONDITION">
            <block type="nrf24l01_hasData" id="nrf24l01_hasData">
            </block>
        </value>
        <statement name="SUBSTACK">
            <block type="nrf24l01_readData" id="nrf24l01_readData">
            </block>
        </statement>
    </block>
    <block type="nrf24l01_parseNumber" id="nrf24l01_parseNumber">
    </block>
    <block type="nrf24l01_parseString" id="nrf24l01_parseString">
    </block>
    <block type="nrf24l01_valueAvailable" id="nrf24l01_valueAvailable">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">H</field>
            </shadow>
        </value>
    </block>
    <block type="nrf24l01_parseValue" id="nrf24l01_parseValue">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">H</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
