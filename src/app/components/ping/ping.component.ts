import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../common/services/network.service';
import { FactoryService } from '../../common/services/factory.service';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})
export class PingComponent implements OnInit {

  ipAddress: string;
  constructor(private networkService:NetworkService, private factory:FactoryService) { }

  ngOnInit() {
  }

  ping(){
    this.networkService.pingAddress(this.ipAddress);
  }
}
