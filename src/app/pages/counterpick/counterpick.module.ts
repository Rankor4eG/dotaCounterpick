import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterpickRoutingModule } from './counterpick-routing.module';
import {CounterpickComponent} from "./counterpick.component";
import { HeroesPickComponent } from './heroes-pick/heroes-pick.component';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { PostHeroComponent } from './heroes-pick/post-hero/post-hero.component';
import {FormsModule} from "@angular/forms";
import { HeroesCardDirective } from './directives/heroes-card.directive';
import {TransformPipe} from "../../shared/pipes/transform.pipe";
import {SharedModule} from "../../shared/modules/shared.module";


@NgModule({
  declarations: [
    CounterpickComponent,
    HeroesPickComponent,
    HeroesDetailsComponent,
    PostHeroComponent,
    HeroesCardDirective,
    TransformPipe
  ],
    exports: [
        CounterpickComponent,
        PostHeroComponent
    ],
    imports: [
        CommonModule,
        CounterpickRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class CounterpickModule { }
