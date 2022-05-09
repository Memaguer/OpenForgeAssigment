// ####### ANUGLAR #######
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// ####### IONIC #######
import { IonicModule } from '@ionic/angular';
// ####### APP #######
import { UserSearchPageRoutingModule } from './user-search-routing.module';
import { UserSearchPage } from './user-search.page';
// ####### COMPONENTS #######
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    UserSearchPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UserSearchPage]
})
export class UserSearchPageModule {}
