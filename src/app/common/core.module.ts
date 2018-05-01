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
import { FactoryService } from './services/factory.service';
import { NetworkService } from './services/network.service';
import { IntroComponent } from '../components/intro/intro.component';
import { PingComponent } from '../components/ping/ping.component';
import { OutputComponent } from '../components/output/output.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, NgxElectronModule, CoreRouterModule,
    BrowserAnimationsModule, FlexLayoutModule, MaterialModule, FormsModule
  ],
  exports:[RouterModule],
  declarations: [HomeComponent, DirectoryViewerComponent, IntroComponent, PingComponent, OutputComponent],
  providers: [FactoryService, NetworkService]
})
export class CoreModule { }
