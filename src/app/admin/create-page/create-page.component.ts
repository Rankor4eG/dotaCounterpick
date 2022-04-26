import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { INewHeroesData} from "../../services/heroes-data.service";
import {HeroesService} from "../../shared/services/heroes.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postHero: HeroesService,

  ) {
    this.form = this.fb.group({
    name: ['', [Validators.required]],
    icon: ['', [Validators.required]],
    heroSkills: this.fb.group({
      firstSkill: ['', []],
      secondSkill: ['', []],
      thirdSkill: ['', []],
      ultimate: ['', []]
    }),
    descriptionHero: ['', [Validators.required]],
    date: new Date(),
  })
  }

  ngOnInit(): void {

  }

  submit() {
    if(this.form.invalid){
      return
    }
    //
    // const hero: INewHeroesData  = {
    //   name: this.form.value.name,
    //   icon: this.form.value.icon,
    //   heroSkills: {
    //     firstSkill: this.form.value.heroSkills.firstSkill,
    //     secondSkill: this.form.value.heroSkills.secondSkill,
    //     thirdSkill: this.form.value.heroSkills.thirdSkill,
    //     ultimate: this.form.value.heroSkills.ultimate
    //   },
    //   descriptionHero: this.form.value.descriptionHero,
    //   date: new Date()
    // }

    const hero: INewHeroesData = {...this.form.value}

    this.postHero.create(hero).subscribe(()=>{
        this.form.reset()
     }
    )

  }

}
