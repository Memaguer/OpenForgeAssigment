import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GitHubService {

    notifyGitHub = new Subject<any>();
    notifyUserGitHub = new Subject<any>();

    private users: any;
    private user: any;

    emitData() {
        this.notifyGitHub.next(this.users);
    }

    setUsers(users: any) {
        this.users = users;
        this.notifyGitHub.next(users);
    }

    getUsers(): [any] {
        return this.users;
    }

    appendUsers(users: any) {
      this.users = this.users.concat(users);
      this.notifyGitHub.next(this.users);
    }

    setUser(user: any){
        this.user = user;
        this.notifyUserGitHub.next(user);
    }
}
