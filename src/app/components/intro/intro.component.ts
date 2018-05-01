import { Component, OnInit } from '@angular/core';
import { FactoryService } from '../../common/services/factory.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  username: string;
  directory: string;
  platform: string;
  ipAddress: string;
  constructor(private factory: FactoryService) { }

  ngOnInit() {
    this.factory.HostInfo.subscribe(
      observ => {
        if (observ) {
          this.username = observ.userInfo.username ? observ.userInfo.username : "User";
          this.directory = observ.userInfo.homedir ? observ.userInfo.homedir : "/";
          this.platform = observ.OS;
          this.ipAddress = observ.interfaces["Local Area Connection"][1].address ? observ.interfaces["Local Area Connection"][1].address : "n/a";
          console.log(observ);
        }
      });
  }
}
