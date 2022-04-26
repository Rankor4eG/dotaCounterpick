import { Component, OnInit } from '@angular/core';
import {HeroesDataService, INewHeroesData} from "../../../services/heroes-data.service";

@Component({
  selector: 'app-heroes-pick',
  templateUrl: './heroes-pick.component.html',
  styleUrls: ['./heroes-pick.component.scss']
})
export class HeroesPickComponent implements OnInit {

  constructor(public heroesDataService: HeroesDataService) { }

  // heroesData:

  ngOnInit(): void {
  }

  updateHereos(newHeroesDate: INewHeroesData){
    console.log(newHeroesDate)
    this.heroesDataService.newHeroesData.push(newHeroesDate)
  }

}
