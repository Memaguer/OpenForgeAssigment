// ###### ANGULAR ####### 
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// ###### IONIC ####### 
import { IonInfiniteScroll } from '@ionic/angular';
// ###### RXJS ####### 
import { Subscription } from 'rxjs';
// ###### UTILS ####### 
import { AppUtils } from '../../app.utils';
// ###### SERVICES ####### 
import { GitHubRequest } from '../../requests/github.request';
import { GitHubService } from '../../services/github.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit, OnDestroy {
  // ###### CHILD ######
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  // ###### SUBSCRIPTION #######
  subscription$: Subscription;
  // ###### DATA #######
  users: any = new Array();
  // ###### FILTER ######
  offset: number = 0;

  constructor(
    private appUtils: AppUtils,
    private githubRequest: GitHubRequest,
    private githubService: GitHubService
  ) { }

  // **************************************************************************
  //  (_)_ __ (_) |_ 
  //  | | '_ \| | __|
  //  | | | | | | |_ 
  //  |_|_| |_|_|\__| 

  ngOnInit() {
    this.initSubscription();
    this.getFeed();
  }

  initSubscription() {
    this.subscription$ = this.githubService.notifyGitHub.subscribe((result: [any]) => {
      this.users = result;
    });
  }

  // **************************************************************************
  //    _____  _(_) |_ 
  //   / _ \ \/ / | __|
  //  |  __/>  <| | |_ 
  //   \___/_/\_\_|\__|

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  // **************************************************************************
  //  | (_)___| |_ ___ _ __   ___ _ __ ___ 
  //  | | / __| __/ _ \ '_ \ / _ \ '__/ __|
  //  | | \__ \ ||  __/ | | |  __/ |  \__ \
  //  |_|_|___/\__\___|_| |_|\___|_|  |___/

  loadData(event) {
    this.offset = this.users[this.users.length - 1].id;
    this.getFeed();
  }

// **************************************************************************
//   _ __ ___  __ _ _   _  ___  ___| |_ ___ 
//  | '__/ _ \/ _` | | | |/ _ \/ __| __/ __|
//  | | |  __/ (_| | |_| |  __/\__ \ |_\__ \
//  |_|  \___|\__, |\__,_|\___||___/\__|___/
//               |_|

getFeed() {
  this.githubRequest.getFeed(this.offset).subscribe((result) => {
    if(this.offset === 0){
      this.githubService.setUsers(result);
    } else {
      this.githubService.appendUsers(result);
    }
    this.infiniteScroll.complete();
  }, (error) => {
    console.error(error);
    this.appUtils.presentToast('Error get users', 'error');
    this.infiniteScroll.complete();
  });
}

}
