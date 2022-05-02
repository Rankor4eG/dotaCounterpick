import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {INewHeroesData} from "../../services/heroes-data.service";
import {HeroesService} from "../../shared/services/heroes.service";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;
  hero: INewHeroesData;

  constructor(
    private fb: FormBuilder,
    private postHero: HeroesService,
    private alert: AlertService
  ) {

  }

  ngOnInit(): void {
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

  submit() {
    if(this.form.invalid){
      return
    }
    const hero: INewHeroesData = {...this.form.value}

    this.postHero.create(hero).subscribe(()=>{
      this.alert.success('Create Post!')
      this.form.reset()
     }
    )
  }

}
