const { spawn } = require('child_process');
const { IPC_CONSTANTS } = require('../assets/constants');

/**
 * Simple ping
 */
ping = (address, event) => {
    var output = "";
    //event.sender.send(IPC_CONSTANTS.RETURN_PING, res)
    const pings = spawn('ping', [address]);
    pings.stdout.on('data', (data) => {
        event.sender.send(IPC_CONSTANTS.RETURN_PING, data.toString());
        output += data;
    });
    pings.stderr.on('data', (err) => {
        event.sender.send(IPC_CONSTANTS.RETURN_PING, err.toString());
        console.log('err', err);
    });
    pings.on('close', (code) => {
        //do something when exit code is thrown
        //console.log('close', code);
    });
}


module.exports = {
    ping
}