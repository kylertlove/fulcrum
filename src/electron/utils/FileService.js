const fs = require('fs');
const os = require('os');
const { SystemObject } = require('../models/ModelObjects');

/**
 * Return Promise Object of directory of given path
 */
getDirectory = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                console.error('getDirectory | ', err)
                reject(err);
            }
            resolve(files);
        });
    });
}

/**
 * Return a SystemObject with system information from host machine
 */
getOsInfo = () => {
    return new Promise((resolve, reject) => {
        try {
            var osObj = new SystemObject(os.platform(), os.userInfo(), os.totalmem());
        } catch (e) {
            console.error("getOsInfo | ", e)
            reject(e);
        }
        resolve(osObj);
    });
}

module.exports = {
    getDirectory,
    getOsInfo
}