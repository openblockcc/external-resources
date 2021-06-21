const cooperativeScheduler = formatMessage => ({
    name: formatMessage({
        id: 'cooperativeScheduler.name',
        default: 'Cooperative Scheduler'
    }),
    extensionId: 'cooperativeScheduler',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'ArthurZheng',
    iconURL: `asset/cooperativeScheduler.png`,
    description: formatMessage({
        id: 'cooperativeScheduler.description',
        default: 'Allow Arduino run multiple tasks.'
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

module.exports = cooperativeScheduler;
