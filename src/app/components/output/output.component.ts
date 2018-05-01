import { Component, OnInit, NgZone } from '@angular/core';
import { FactoryService } from '../../common/services/factory.service';
import { ConsoleLog } from '../../common/models/ConsoleLog';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  consoleOutput: ConsoleLog[] = [];
  constructor(private factory: FactoryService, private zone: NgZone) { }

  ngOnInit() {
    this.factory.ConsoleList.subscribe(res => {
      this.zone.run(() => { 
        this.consoleOutput = res;
      });
    });
  }

  clearConsole(){
    this.factory.ConsoleList.next([]);
  }

}
