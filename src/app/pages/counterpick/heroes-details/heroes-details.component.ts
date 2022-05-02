import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HeroesDataService, INewHeroesData} from "../../../services/heroes-data.service";
import {HeroesService} from "../../../shared/services/heroes.service";
import {Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.scss']
})
export class HeroesDetailsComponent implements OnInit {


  heroes$: Observable<INewHeroesData>;


  constructor(private route: ActivatedRoute,
              public heroesService: HeroesService,
              private router: Router
              ) {

  }



  ngOnInit(): void {
    this.heroes$ = this.route.params.pipe(switchMap((params) => this.heroesService.getById(params['id'])))
  }


  goToMainPage(){
    this.router.navigate(['/counterpick'], {relativeTo:this.route}).then(()=>{})
  }

}
