const oled = formatMessage => ({
    name: 'OLED',
    extensionId: 'oled',
    version: '0.0.1',
    supportDevice: ['arduinoUno'],
    author: 'Test',
    iconURL: `asset/OLED.png`,
    description: formatMessage({
        id: 'oled.description',
        default: 'I2C oled display',
        description: 'Description of oled'
    }),
    featured: true,
    blocks: `block.js`,
    generator: 'generator.js',
    toolbox: `toolbox.xml`,
    msg: `language`,
    tags: ['display'],
    helpLink: 'https://openblockcc.gitee.io/wiki/',
    disabled: true
});

module.exports = oled;
