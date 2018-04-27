import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  appName: string = "Fulcrum";
  directory: string = "C:\\Users\\q1422955"; //TODO: change to factory Behavior subject
  constructor() {
  }

  ngOnInit() {

  }
  ngOnDestroy(): void { }
}
