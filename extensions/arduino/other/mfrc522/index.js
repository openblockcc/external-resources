const mfrc522 = formatMessage => ({
    name: formatMessage({
        id: 'mfrc522.name',
        default: 'MFRC-522 Module'
    }),
    extensionId: 'mfrc522',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/mfrc522.png`,
    description: formatMessage({
        id: 'mfrc522.description',
        default: '13.56MHz radio frequency identification module using spi interface.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['other'],
    helpLink: 'https://openblockcc.gitee.io/wiki/main'
});

module.exports = mfrc522;
