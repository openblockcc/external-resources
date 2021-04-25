const QDPRobot = formatMessage => ({
    name: 'QDP',
    extensionId: 'QDPRobot',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: [], // Hide kit extension in library
    author: 'QDProbot',
    iconURL: `asset/QH.png`,
    description: formatMessage({
        id: 'QDPRobot.description',
        default: 'QDP robot',
        description: 'Description of QDP robot'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['kit'],
    helpLink: 'http://www.qdprobot.com/'
});

module.exports = QDPRobot;
