const fs = require('fs');
const os = require('os');
const { SystemObject } = require('../models/ModelObjects');

/**
 * Return Promise Object of directory of given path
 */
getDirectory = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) reject(err);
            resolve(files);
        });
    });
}

getOsInfo = () => {
    return new Promise((resolve, reject) => {
        console.log("working")
        try {
            var osObj = new SystemObject(os.platform(), os.userInfo(), os.totalmem());
            console.log(osObj)
        } catch (e) {
            console.log(e)
            reject(e);
        }
        resolve(osObj);
    });
}

module.exports = {
    getDirectory,
    getOsInfo
}