import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { IntroComponent } from "../components/intro/intro.component";
import { PingComponent } from "../components/ping/ping.component";

const routes:Routes = [
    {path: '', component:HomeComponent, children: [
        {path: '', redirectTo: 'intro', pathMatch: 'full'},
        {path: 'intro', component: IntroComponent},
        {path: 'ping', component: PingComponent}
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
export class CoreRouterModule {}