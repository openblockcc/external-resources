const fourDigitDisplay = formatMessage => ({
    name: formatMessage({
        id: 'fourDigitDisplay.name',
        default: '4-Digit Display'
    }),
    extensionId: 'fourDigitDisplay',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32'],
    author: 'ArthurZheng',
    iconURL: `asset/fourDigitDisplay.png`,
    description: formatMessage({
        id: 'fourDigitDisplay.description',
        default: '4-Digit Display module based on TM1637.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = fourDigitDisplay;
