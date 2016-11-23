import {Injectable} from '@angular/core';

import {User} from './user';
import {USERS} from './mock-users';

@Injectable()
export class GenericService {

    loggedInUser: User;

    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }

    getUser(id: number): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user.id === id));
    }

    private getLoginUser(username: string): User {
        return USERS.find(user => user.username == username);
    }

    login(username: string, password: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            let user: User = this.getLoginUser(username);
            if (user && user.password === password) {
                this.loggedInUser = user;
                resolve(user);
            } else {
                reject(new Error(`Either username ${username} is unknown or password is invalid!`));
            }
        });
    }

    logout(): void {
        this.loggedInUser = null;
    }

    loggedIn(): boolean {
        return this.loggedInUser != null;
    }

}
