import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {HeroesService} from "../../shared/services/heroes.service";
import {INewHeroesData} from "../../services/heroes-data.service";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  heroes: INewHeroesData[] = [];
  searchStr = '';

  constructor(
    private heroesService: HeroesService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.heroesService.getAll().subscribe(heroes => {
      this.heroes = heroes
    })
  }

  remove(id: string) {
    this.heroesService.remove(id).subscribe(() => {
      this.heroes = this.heroes.filter(hero => hero.id !== id)
      this.alert.success('Post Deleted!')
    })
  }

}
