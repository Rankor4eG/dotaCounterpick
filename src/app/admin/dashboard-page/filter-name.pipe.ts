import { Pipe, PipeTransform } from '@angular/core';
import {INewHeroesData} from "../../services/heroes-data.service";

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(array: INewHeroesData[]){
    array.sort((a: any, b: any) => {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if(x < y) {
        return -1
    } else {
      return 1;
    }

    });
    return array
  }

}
