const ds18b20 = formatMessage => ({
    name: formatMessage({
        id: 'ds18b20.name',
        default: 'DS18B20 Sensor'
    }),
    extensionId: 'ds18b20',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/ds18b20.png`,
    description: formatMessage({
        id: 'ds18b20.description',
        default: 'Single bus digital temperature sensor based on DS18B20.'
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

module.exports = ds18b20;
