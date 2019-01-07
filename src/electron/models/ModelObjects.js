/**
 * hostInfo {
 *      OS: string;
 *      userinfo: obj
 *      mem: number;
 *      interfaces: obj
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