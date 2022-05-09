import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tabs = [
    {name: 'Feed', tab: 'feed', icon: 'logo-github'},
    {name: 'User/Search', tab: 'user-search', icon: 'person'},
  ];

  constructor(
    private router: Router
  ) {}

  goTo(tab: string){
    this.router.navigate([`/tabs/${tab}`]);
  }

}
