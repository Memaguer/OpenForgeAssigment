import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ofxNumber'
})
export class OfxNumberPipe implements PipeTransform {

  transform(value: number): string {
    if(value){
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return '0';
    }
  }

}
