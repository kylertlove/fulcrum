import { Injectable } from '@angular/core';
import { FactoryService } from './factory.service';
import { ElectronService } from 'ngx-electron';
import { IPC_CONSTANTS } from '../../../assets/constants';
import { ConsoleLog } from '../models/ConsoleLog';

@Injectable()
export class NetworkService {

  constructor(private electronService: ElectronService, private factory: FactoryService) {
    if(this.electronService.isElectronApp) {
      //GetHostInfo listener
      this.electronService.ipcRenderer.on(IPC_CONSTANTS.RETURN_OS_INFO, (event, args) => {
        console.log('hostInfo.next()', args)
        this.factory.HostInfo.next(args);
      });
      //pingAddress listener
      this.electronService.ipcRenderer.on(IPC_CONSTANTS.RETURN_PING, (event, args) => {
        let arr = this.factory.ConsoleList.getValue();
        arr.push(new ConsoleLog(args,  new Date()));
        this.factory.ConsoleList.next(arr);
      });
    }
   }


   /**
    * Call for host information.  Username, Directory, and Local IP info
    */
  getHostInformation(){
    this.electronService.ipcRenderer.send(IPC_CONSTANTS.GET_OS_INFO);
  }

  /**
   * Ping given address, returns response
   */
  pingAddress(address: String){
    this.electronService.ipcRenderer.send(IPC_CONSTANTS.PING, address);
  }
}
