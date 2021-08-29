const QDPRobotC02 = () => ({
    name: 'QDPRobotC02',
    extensionId: 'QDPRobotC02',
    version: '1.0.0',
    supportDevice: ['QDPRobotC02_arduinoEsp32'],
    author: 'QDProbot',
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://qdprobot.taobao.com'
});

module.exports = QDPRobotC02;
