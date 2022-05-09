import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfxItemPublicRepoDirective } from './ofx-item-public-repo.directive';



@NgModule({
  declarations: [
    OfxItemPublicRepoDirective
  ],
  exports: [
    OfxItemPublicRepoDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
