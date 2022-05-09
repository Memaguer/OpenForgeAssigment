// ####### ANUGLAR #######
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// ####### IONIC #######
import { IonicModule } from '@ionic/angular';
// ####### APP #######
import { FeedPageRoutingModule } from './feed-routing.module';
import { FeedPage } from './feed.page';
// ####### COMPONENTS #######
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    FeedPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FeedPage]
})
export class FeedPageModule {}
