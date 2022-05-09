import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfxGithubImagePipe } from './ofx-github-image.pipe';
import { OfxNumberPipe } from './ofx-number.pipe';



@NgModule({
  declarations: [
    OfxGithubImagePipe,
    OfxNumberPipe
  ],
  exports: [
    OfxNumberPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
