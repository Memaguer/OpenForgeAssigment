// ####### ANGULAR #######
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// ###### IONIC ####### 
import { IonSearchbar, NavController } from '@ionic/angular';
// ###### RXJS ####### 
import { Subscription } from 'rxjs';
// ###### UTILS ####### 
import { AppUtils } from '../../app.utils';
// ###### SERVICES ####### 
import { GitHubRequest } from '../../requests/github.request';
import { GitHubService } from '../../services/github.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.page.html',
  styleUrls: ['./user-search.page.scss'],
})
export class UserSearchPage implements OnInit, OnDestroy {
  // ###### CHILD ######
  @ViewChild(IonSearchbar) searchbar: IonSearchbar;
  // ###### SUBSCRIPTION #######
  subscription$: Subscription;
  // ###### DATA #######
  user: any;
  login: string;
  fail: boolean;

  constructor(
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
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
    this.getParameter();
  }

  initSubscription() {
    this.subscription$ = this.githubService.notifyUserGitHub.subscribe((result: any) => {
      this.user = result;
    });
  }

  getParameter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.login = paramMap.get('user');
      if(this.login !== null){
        this.getUserRequest(this.login);
      } else {
        this.fail = true;
      }
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

  search() {
    this.navController.navigateRoot(`/tabs/user-search/${this.searchbar.value}`);
  }

  ionSearchbarFocus(){
    this.searchbar.value = '';
  }

  // **************************************************************************
  //   _ __ ___  __ _ _   _  ___  ___| |_ ___ 
  //  | '__/ _ \/ _` | | | |/ _ \/ __| __/ __|
  //  | | |  __/ (_| | |_| |  __/\__ \ |_\__ \
  //  |_|  \___|\__, |\__,_|\___||___/\__|___/
  //               |_|

  getUserRequest(user: string) {
    this.githubRequest.getUser(user).subscribe((result) => {
      this.githubService.setUser(result);
    }, (error) => {
      console.error(error);
      this.fail = true;
      this.appUtils.presentToast('Error loading user', 'error');
    });
  }

}
