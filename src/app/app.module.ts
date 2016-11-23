import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login.component';
import {GenericService} from "./generic.service";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    declarations: [AppComponent, LoginComponent, DashboardComponent],
    providers: [GenericService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
