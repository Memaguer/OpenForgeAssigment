import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ofxItemPublicRepo]'
})
export class OfxItemPublicRepoDirective {
  @Input('totalRepos') repositories: number;

  constructor(
    public element: ElementRef,
    public renderer: Renderer2
  ) { 
    console.log(this.repositories);
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

}
