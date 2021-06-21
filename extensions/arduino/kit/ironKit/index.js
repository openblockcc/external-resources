const ironKit = formatMessage => ({
    name: 'Iron Kit',
    extensionId: 'ironKit',
    version: '1.0.0',
    supportDevice: ['ironKit_arduinoUno'],
    author: 'ArthurZheng',
    description: formatMessage({
        id: 'ironKit.description',
        default: 'Yiqichuang iron kit robot.',
        description: 'Description of ironKit'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://www.sxyiqichuang.com'
});

module.exports = ironKit;
