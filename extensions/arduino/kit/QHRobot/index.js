const QDPRobot = () => ({
    name: 'QDP',
    extensionId: 'QDPRobot',
    version: '1.0.0',
    supportDevice: ['QDPRobot_arduinoUnoUltra'],
    author: 'QDProbot',
    hide: true,
    blocks: `blocks.js`,
    generator: `generator.js`,
    toolbox: `toolbox.js`,
    msg: `msg.js`,
    library: 'lib',
    helpLink: 'https://qdprobot.taobao.com'
});

module.exports = QDPRobot;
