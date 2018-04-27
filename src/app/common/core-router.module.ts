import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { OsInfoComponent } from "../components/os-info/os-info.component";

const routes:Routes = [
    {path: '', component:HomeComponent, children: [
        {path: '', redirectTo: 'osInfo', pathMatch: 'full'},
        {path: 'osInfo', component:OsInfoComponent}
    ]}
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CoreRouterModule {

}