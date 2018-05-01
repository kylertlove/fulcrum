import { Component, OnInit, OnDestroy } from '@angular/core';
import { FactoryService } from '../../common/services/factory.service';
import { NetworkService } from '../../common/services/network.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  appName: string = "Fulcrum";
  constructor(private factory: FactoryService, private netService: NetworkService) {
  }

  ngOnInit() {
    this.netService.getHostInformation();
  }
  ngOnDestroy(): void { }
}
