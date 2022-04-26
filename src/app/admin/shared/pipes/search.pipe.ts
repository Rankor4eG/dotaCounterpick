import { Pipe, PipeTransform } from '@angular/core';
import {INewHeroesData} from "../../../services/heroes-data.service";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(heroes: INewHeroesData[], search: string): INewHeroesData[]{
    if (!search.trim()){
      return heroes

    }
    return heroes.filter(hero => {
      return hero.name!.toLowerCase().includes(search.toLowerCase())

    })

  }

}
