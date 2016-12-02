import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {AppComponent}  from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login.component';
import {GenericService} from "./generic.service";
import {DashboardComponent} from "./dashboard.component";
import {UsersComponent} from "./users.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        UsersComponent
    ],
    providers: [GenericService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
