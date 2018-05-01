import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ConsoleLog } from '../models/ConsoleLog';

@Injectable()
export class FactoryService {

  public HostInfo: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public ConsoleList: BehaviorSubject<ConsoleLog[]> = new BehaviorSubject<ConsoleLog[]>([]);
  constructor() { }

}
