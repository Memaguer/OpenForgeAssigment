import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ofxGithubImage'
})
export class OfxGithubImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
