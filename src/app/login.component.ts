import {Component, Input} from '@angular/core';
import {Router}   from '@angular/router';
import headersToString = http.headersToString;

import {GenericService} from './generic.service';

@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    @Input()
    username: string;
    @Input()
    password: string;

    constructor(private genericService: GenericService,
                private router: Router) {
    }

    doLogin(): void {
        this.genericService.login(this.username, this.password).then(user => {
            this.router.navigate(['/dashboard']);
        }).catch(error => {
            log.error("login failure: " + (error.message || error));
        });
    }

}

