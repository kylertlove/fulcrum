import { Component, OnInit, OnDestroy } from '@angular/core';
import { FactoryService } from '../../common/services/factory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  appName: string = "Fulcrum";
  username: string;
  directory: string = null; //TODO: change to factory Behavior subject
  constructor(private factory: FactoryService) {

      factory.HostInfo.subscribe( observ => {
        if(observ){
          this.directory = observ.hostInfo.userInfo.homedir;
          this.username = observ.hostInfo.userInfo.username;
        }
        // this.directory = observ.userInfo.username;
      })
  }

  ngOnInit() {

  }
  ngOnDestroy(): void { }
}
