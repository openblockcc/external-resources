const max6675 = formatMessage => ({
    name: formatMessage({
        id: 'max6675.name',
        default: 'MAX6675 Module'
    }),
    extensionId: 'max6675',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/max6675.png`,
    description: formatMessage({
        id: 'max6675.description',
        default: 'K-type thermocouple temperature measurement module ' +
            'based on MAX6675, the measurement range is 0 ~ 1024 ℃'
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

module.exports = max6675;
