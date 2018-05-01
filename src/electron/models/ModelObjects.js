/**
 * hostInfo {
 *      OS: string;
 *      mem: number;
 *      userInfo: https://nodejs.org/api/os.html#os_os_userinfo_options
 *      interfaces: https://nodejs.org/api/os.html#os_os_networkinterfaces 
 * }
 * @param {string} os 
 * @param {obj} userinfo 
 * @param {number} mem 
 * @param {obj} interfaces 
 */
function SystemObject(os, userinfo, mem, interfaces) {
    this.OS = os;
    this.userInfo = userinfo;
    this.mem = mem;
    this.interfaces = interfaces;
}


module.exports = {
    SystemObject
}