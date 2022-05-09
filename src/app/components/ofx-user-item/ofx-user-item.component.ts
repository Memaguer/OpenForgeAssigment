// ###### ANGULAR ####### 
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// ###### UTILS ####### 
import { AppUtils } from '../../app.utils';
// ###### SERVICES ####### 
import { GitHubRequest } from '../../requests/github.request';

@Component({
  selector: 'ofx-user-item',
  templateUrl: './ofx-user-item.component.html',
  styleUrls: ['./ofx-user-item.component.scss']
})
export class OfxUserItemComponent implements OnInit {
  @Input() user: any;

  constructor(
    private router: Router,
    private appUtils: AppUtils,
    private githubRequest: GitHubRequest
  ) { }

  // **************************************************************************
  //  (_)_ __ (_) |_ 
  //  | | '_ \| | __|
  //  | | | | | | |_ 
  //  |_|_| |_|_|\__| 

  ngOnInit() { 
    this.getInfoUser();
  }

  // **************************************************************************
  //    _____   _____ _ __ | |_ ___ 
  //   / _ \ \ / / _ \ '_ \| __/ __|
  //  |  __/\ V /  __/ | | | |_\__ \
  //   \___| \_/ \___|_| |_|\__|___/

  viewUser(){
    this.router.navigate([`/tabs/user-search/${this.user.login}`]);
  }

  // **************************************************************************
  //   _ __ ___  __ _ _   _  ___  ___| |_ ___ 
  //  | '__/ _ \/ _` | | | |/ _ \/ __| __/ __|
  //  | | |  __/ (_| | |_| |  __/\__ \ |_\__ \
  //  |_|  \___|\__, |\__,_|\___||___/\__|___/
  //               |_|

  getInfoUser() {
    this.githubRequest.getUser(this.user.login).subscribe((result) => {
      this.user['detail'] = result;
    }, (error) => {
      console.error(error);
      this.appUtils.presentToast('Error get users', 'error');
    });
  }

}
