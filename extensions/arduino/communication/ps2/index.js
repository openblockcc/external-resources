const ps2 = formatMessage => ({
    name: formatMessage({
        id: 'ps2.name',
        default: 'PS2 Remote Control'
    }),
    extensionId: 'ps2',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/ps2.png`,
    description: formatMessage({
        id: 'ps2.description',
        default: 'PS2 wireless remote controller with 4 signal lines.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'https://openblockcc.gitee.io/wiki/main'
});

module.exports = ps2;
