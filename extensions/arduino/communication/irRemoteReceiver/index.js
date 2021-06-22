const irRemoteReceiver = formatMessage => ({
    name: formatMessage({
        id: 'irRemoteReceiver.name',
        default: 'IR Remote Receiver'
    }),
    extensionId: 'irRemoteReceiver',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/irRemoteReceiver.png`,
    description: formatMessage({
        id: 'irRemoteReceiver.description',
        default: 'Receiving and decoding data in infrared carrier.'
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

module.exports = irRemoteReceiver;
