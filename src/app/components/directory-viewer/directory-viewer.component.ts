import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { IPC_CONSTANTS } from '../../../assets/constants';

/**
 * **Component** - Directory Viewer. 
 */
@Component({
  selector: 'app-directory-viewer',
  templateUrl: './directory-viewer.component.html',
  styleUrls: ['./directory-viewer.component.css']
})
export class DirectoryViewerComponent implements OnInit {

  //<app-directory-viewer *ngIf="directory" [dir]="directory"></app-directory-viewer>
  currentDirectory: string[];
  @Input() dir;
  constructor(private electronService: ElectronService, private ref: ChangeDetectorRef) {
    this.currentDirectory = [];
   }

  ngOnInit() {
        //Async Listener
        if (this.electronService.isElectronApp) {
          this.electronService.ipcRenderer.on(IPC_CONSTANTS.RETURN_DIRECTORY, (event, args) => {
            this.currentDirectory = args;
            //zone.js doesnt detect changes on ipc.  manually detect
            this.ref.detectChanges();
          });
          let location = this.dir ? this.dir : '/';
          this.electronService.ipcRenderer.send(IPC_CONSTANTS.GET_DIRECTORY, location);
        } else {
          console.log("This is running in a browser and not in electron");
        }
  }

}
