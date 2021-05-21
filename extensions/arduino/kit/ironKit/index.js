const ironKit = formatMessage => ({
    name: 'Iron Kit',
    extensionId: 'ironKit',
    version: '1.0.0',
    supportDevice: [], // Hide kit extension in library
    author: 'ArthurZheng',
    iconURL: `asset/ironKit.png`,
    description: formatMessage({
        id: 'ironKit.description',
        default: 'Yiqichuang iron kit robot.',
        description: 'Description of ironKit'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['kit'],
    helpLink: 'https://www.sxyiqichuang.com'
});

module.exports = ironKit;
