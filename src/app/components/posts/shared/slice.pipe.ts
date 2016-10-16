import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(posts: Array<any>, from: number, to: number): any {
  	return posts.slice(from, to);
  }

}
