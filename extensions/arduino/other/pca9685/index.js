const pca9685 = formatMessage => ({
    name: formatMessage({
        id: 'pca9685.name',
        default: 'PCA9685 Module'
    }),
    extensionId: 'pca9685',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/pca9685.png`,
    description: formatMessage({
        id: 'pca9685.description',
        default: 'The 16 channel PWM driver module based on PCA9685, uses IIC bus for communication.'
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

module.exports = pca9685;
