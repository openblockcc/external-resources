const QDPRobot = formatMessage => ({
    name: 'QDP',
    extensionId: 'QDPRobot',
    version: '1.0.0',
    supportDevice: [],
    author: 'QDProbot',
    iconURL: `asset/QH.png`,
    description: formatMessage({
        id: 'QDPRobot.description',
        default: 'QDP robot',
        description: 'Description of QDP robot'
    }),
    featured: true,
    blocks: `blocks.js`,
    generator: `generator.js`,
    toolbox: `toolbox.js`,
    msg: `msg.js`,
    library: 'lib',
    tags: ['kit','actuator', 'sensor', 'display', 'communication', 'other'],
    helpLink: 'https://qdprobot.taobao.com'
});

module.exports = QDPRobot;