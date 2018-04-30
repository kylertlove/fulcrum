import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NgxElectronModule } from 'ngx-electron';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { CoreRouterModule } from './core-router.module';
import { DirectoryViewerComponent } from '../components/directory-viewer/directory-viewer.component';
import { OsInfoComponent } from '../components/os-info/os-info.component';
import { FactoryService } from './services/factory.service';

@NgModule({
  imports: [
    CommonModule, NgxElectronModule, CoreRouterModule,
    BrowserAnimationsModule, FlexLayoutModule, MaterialModule
  ],
  exports:[RouterModule],
  declarations: [HomeComponent, DirectoryViewerComponent, OsInfoComponent],
  providers: [FactoryService]
})
export class CoreModule { }
