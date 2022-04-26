import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HeroesDataService, INewHeroesData} from "../../../services/heroes-data.service";

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.scss']
})
export class HeroesDetailsComponent implements OnInit {


  heroesData!: INewHeroesData;


  constructor(private route: ActivatedRoute,
              public heroesDataService: HeroesDataService,
              private router: Router
              ) {

  }



  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    this.heroesData = this.heroesDataService.getById(params['id'])!
    })
  }


  goToMainPage(){
    this.router.navigate(['/counterpick'], {relativeTo:this.route}).then(()=>{})
  }

}
