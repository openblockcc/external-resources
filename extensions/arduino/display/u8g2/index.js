const u8g2 = formatMessage => ({
    name: 'U8G2',
    extensionId: 'u8g2',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32'],
    author: 'ArthurZheng',
    iconURL: `asset/u8g2.png`,
    description: formatMessage({
        id: 'u8g2.description',
        default: 'U8g2 is a general graphics library for multiple screens, ' +
            'which is suitable for LCD (base on ST7920) or OLED (base on SSD1306) screens.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'https://openblockcc.gitee.io/wiki/main'
});

module.exports = u8g2;
