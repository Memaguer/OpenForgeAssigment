import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        loadChildren: () => import('../pages/feed/feed.module').then(m => m.FeedPageModule)
      },
      {
        path: 'user-search/:user',
        loadChildren: () => import('../pages/user-search/user-search.module').then(m => m.UserSearchPageModule)
      },
      {
        path: 'user-search',
        loadChildren: () => import('../pages/user-search/user-search.module').then(m => m.UserSearchPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/user-search',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/user-search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
