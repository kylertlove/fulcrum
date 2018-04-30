import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FactoryService {

  public HostInfo: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }

}
