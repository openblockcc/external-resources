const ironKit = formatMessage => ({
    name: 'IronKit',
    deviceId: 'ironKit_arduinoUno',
    manufactor: 'YQC Robot',
    learnMore: 'https://item.taobao.com/item.htm?id=628120335101',
    iconURL: 'asset/ironKit.png',
    description: formatMessage({
        id: 'ironKit.description',
        default: 'Yiqichuang iron kit robot.'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/ironKit-illustration.svg',
    connectionSmallIconURL: 'asset/ironKit-small.svg',
    programMode: ['realtime', 'upload'],
    defaultProgramMode: 'upload',
    programLanguage: ['block', 'cpp'],
    tags: ['arduino', 'kit'],
    deviceExtensions: ['ironKit', 'apds9960'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://www.sxyiqichuang.com/'
});

module.exports = ironKit;
