import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HeroesService} from "../../shared/services/heroes.service";
import {switchMap} from "rxjs";
import {INewHeroesData} from "../../services/heroes-data.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  form: FormGroup;
  hero: INewHeroesData;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      icon: ['', [Validators.required]],
      descriptionHero: ['', [Validators.required]],
      heroSkills: this.fb.group({
        firstSkill: ['', []],
        secondSkill: ['', []],
        thirdSkill: ['', []],
        ultimate: ['', []],
      }),
    })
  }


  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.heroesService.getById(params['id'])
      })
    ).subscribe((hero: INewHeroesData) => {
      this.hero = hero;
      this.form.patchValue({
        name: hero.name,
        icon: hero.icon,
        descriptionHero: hero.descriptionHero,
        heroSkills: {
          firstSkill: hero.heroSkills.firstSkill,
          secondSkill: hero.heroSkills.secondSkill,
          thirdSkill: hero.heroSkills.thirdSkill,
          ultimate: hero.heroSkills.ultimate,
        }
      })
    })
  }

  submit(){
    if(this.form.invalid){
      return
    }
    this.submitted = true
    this.heroesService.update({
      ...this.hero,
      date: new Date(),
      name: this.form.value.name,
      icon: this.form.value.icon,
      descriptionHero: this.form.value.descriptionHero,
      heroSkills: {
        firstSkill: this.form.value.heroSkills.firstSkill,
        secondSkill: this.form.value.heroSkills.secondSkill,
        thirdSkill: this.form.value.heroSkills.thirdSkill,
        ultimate: this.form.value.heroSkills.ultimate,
      }
    }).subscribe(() => {
      this.submitted =false
    })
  }

  buttonEdit(){

  }

  onSubmit(){
    this.router.navigate(['/admin', 'dashboard']).then(()=>{})

  }

}
