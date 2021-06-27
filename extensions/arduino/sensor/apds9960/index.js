const apds9960 = formatMessage => ({
    name: 'APDS9960',
    extensionId: 'apds9960',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/apds9960.png`,
    description: formatMessage({
        id: 'apds9960.description',
        default: 'Proximity, Light, RGB, and Gesture Sensor which uses an I2C interface.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://openblockcc.gitee.io/wiki/main'
});

module.exports = apds9960;
