import { Component, OnInit } from '@angular/core';
import {HeroesDataService, INewHeroesData} from "../../../services/heroes-data.service";
import {HeroesService} from "../../../shared/services/heroes.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-heroes-pick',
  templateUrl: './heroes-pick.component.html',
  styleUrls: ['./heroes-pick.component.scss']
})
export class HeroesPickComponent implements OnInit {

  heroes$: Observable<INewHeroesData[]>

  constructor(
    private heroesService: HeroesService
  ) { }


  ngOnInit(): void {
    this.heroes$ = this.heroesService.getAll()
  }

}
