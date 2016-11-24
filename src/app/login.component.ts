import {Component, Input} from '@angular/core';
import {Router}   from '@angular/router';

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

    loginInfo: string;

    constructor(private genericService: GenericService,
                private router: Router) {
    }

    doLogin(): void {
        this.genericService.login(this.username, this.password).then(user => {
            this.loginInfo = 'welcome';
            this.router.navigate(['/dashboard']);
        }).catch(error => {
            this.loginInfo = 'login failure: ' + (error.message || error);
        });
    }

}

