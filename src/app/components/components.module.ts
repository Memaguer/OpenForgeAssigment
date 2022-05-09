// ####### ANGULAR #######
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ####### PIPE #######
import { PipesModule } from '../pipes/pipes.module';
// ####### DIRECTIVE #######
import { DirectivesModule } from '../directives/directives.module';
// ####### COMPONENTS #######
import { OfxHeaderComponent } from './ofx-header/ofx-header.component';
import { OfxUserInfoComponent } from './ofx-user-info/ofx-user-info.component';
import { OfxUserItemComponent } from './ofx-user-item/ofx-user-item.component';
import { OfxUserNumbersComponent } from './ofx-user-numbers/ofx-user-numbers.component';


@NgModule({
  declarations: [
    OfxHeaderComponent,
    OfxUserInfoComponent,
    OfxUserItemComponent,
    OfxUserNumbersComponent
  ],
  exports: [
    OfxHeaderComponent,
    OfxUserInfoComponent,
    OfxUserItemComponent,
    OfxUserNumbersComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule
  ]
})
export class ComponentsModule { }
