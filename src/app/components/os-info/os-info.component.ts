import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IPC_CONSTANTS } from '../../../assets/constants';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-os-info',
  templateUrl: './os-info.component.html',
  styleUrls: ['./os-info.component.css']
})
export class OsInfoComponent implements OnInit {

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
    if(this.electronService.isElectronApp) {
      this.electronService.ipcRenderer.on(IPC_CONSTANTS.RETURN_OS_INFO, (event, args) => {
        console.log(args)
      })
    }
  }

  getOS() {
    this.electronService.ipcRenderer.send(IPC_CONSTANTS.GET_OS_INFO);
  }

}
