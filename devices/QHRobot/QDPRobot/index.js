const QDPRobot = formatMessage => ({
    name: 'QDP Robot',
    deviceId: 'QDPRobot_arduinoUnoUltra',
    manufactor: 'QDP Robot',
    learnMore: 'https://qdprobot.taobao.com',
    iconURL: 'asset/QDPRobot.png',
    description: formatMessage({
        id: 'QDPRobot.description',
        default: 'QDP robot.'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: [
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523' // CH340
    ],
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/QDPRobot-illustration.svg',
    connectionSmallIconURL: 'asset/QDPRobot-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino', 'kit'],
    deviceExtensions: ['QDPRobot'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'http://www.qdprobot.com/'
});

module.exports = QDPRobot;
