const dht11 = formatMessage => ({
    name: 'SingleLed',
    extensionId: 'singleLed',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'makeyMakey'],
    author: 'liucy',
    iconURL: `asset/singleLED.png`,
    description: formatMessage({
        id: 'singleLed.description',
        default: 'LED module.',
        description: 'Description of SingleLed'
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

module.exports = dht11;
