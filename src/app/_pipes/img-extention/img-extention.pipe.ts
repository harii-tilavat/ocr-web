import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgExtention'
})
export class ImgExtentionPipe implements PipeTransform {

  transform(value: string): string {
    const pattern = /\.(jpeg|jpg|png|mp4)/g;
    if (value) {
      return value.replace(pattern, '.png');
    }
    return value;
  }

}
