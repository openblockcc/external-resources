const dht11 = formatMessage => ({
    name: 'Buzzer',
    extensionId: 'buzzer',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'makeyMakey'],
    author: 'liucy',
    iconURL: `asset/buzzer.png`,
    description: formatMessage({
        id: 'buzzer.description',
        default: 'Buzzer module.',
        description: 'Description of Buzzer'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = dht11;
