import {Component} from '@angular/core';
import {Router}   from '@angular/router';

import {GenericService} from './generic.service';

@Component({
    selector: 'my-app',
    template: `
        <h3>{{title}}</h3>
        <footer>
            <p class='logArea'>{{logInfo}}</p>
            <p class='copyright'>&copy; 2016 Homeautomation Team</p>
        </footer>
    `
})

export class AppComponent {
    title = 'Starting...';

    logInfo: string;

    log(info: string): void {
        this.logInfo = info;
    }

    //constructor(private router: Router, private loginCompoent: LoginComponent) {}
    constructor(private router: Router, private genericService: GenericService) {
        this.log('Starting...');
        if (genericService.loggedIn()) {
            this.log('Goto dashboard');
            this.router.navigate(['/dashboard']);
        } else {
            this.log('Goto login');
            this.router.navigate(['/login']);
        }
    }

}
