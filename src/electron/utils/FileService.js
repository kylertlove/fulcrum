const fs = require('fs');

/**
 * Return Promise Object of directory of given path
 */
getDirectory = (path) => {
    return new Promise( (resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if(err) reject(err);
            resolve(files);
        });
    });
}

module.exports = {
    getDirectory
}
