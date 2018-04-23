import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NgxElectronModule } from 'ngx-electron';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

const routes:Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes), NgxElectronModule, 
    BrowserAnimationsModule, FlexLayoutModule, MaterialModule
  ],
  exports:[RouterModule],
  declarations: [HomeComponent]
})
export class CoreModule { }
