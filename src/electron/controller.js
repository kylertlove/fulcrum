//consts dont get copied to dist on build.  location is where it is after file movement
const { IPC_CONSTANTS } = require('./assets/constants');
const { getDirectory } = require('./utils/FileService');

//Builds IPC Listeners 
module.exports.buildIpc = (ipcMain) => {
    ipcMain.on(IPC_CONSTANTS.GET_DIRECTORY, (event, arg) => {
        getDirectory(arg)
            .then(
                (files) => {
                    event.sender.send(IPC_CONSTANTS.RETURN_DIRECTORY, files);
                },
                (err) => {
                    event.sender.send(IPC_CONSTANTS.RETURN_DIRECTORY, err);
                });
    });

    ipcMain.on(IPC_CONSTANTS.GET_OS_INFO, (event, arg) => {
        getOsInfo()
            .then(
                (res) => {
                    event.sender.send(IPC_CONSTANTS.RETURN_OS_INFO, { "OS Info": res });
                },
                (err) => {
                    event.sender.send(IPC_CONSTANTS.RETURN_OS_INFO, { "err": err });
                });
    });
}