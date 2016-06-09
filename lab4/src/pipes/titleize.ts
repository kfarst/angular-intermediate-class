import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'titleize' })
export class TitleizePipe implements PipeTransform {
  constructor () {}

  transform (str: string): string {
    return str.replace('_', ' ').replace('-', ' ').replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
