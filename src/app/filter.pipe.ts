import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(originalData: User[], searchString: string): any {
    if (searchString) {
     let search_lower = searchString.toLowerCase();
     return originalData.filter(obj => Object.keys(obj).filter(key => obj[key].toString().toLowerCase().includes(search_lower)).length > 0);
    }
    else return originalData;
  }

}
