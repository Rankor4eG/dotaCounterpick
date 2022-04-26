import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CounterpickComponent} from "./counterpick.component";
import {HeroesPickComponent} from "./heroes-pick/heroes-pick.component";
import {HeroesDetailsComponent} from "./heroes-details/heroes-details.component";

const routes: Routes = [
  {
    path: '',
    component: CounterpickComponent,
    children: [
      {
        path: '',
        component: HeroesPickComponent
      },
      {
        path:':id',
        component: HeroesDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterpickRoutingModule { }
