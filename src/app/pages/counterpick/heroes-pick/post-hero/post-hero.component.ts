import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {INewHeroesData} from "../../../../services/heroes-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-hero',
  templateUrl: './post-hero.component.html',
  styleUrls: ['./post-hero.component.scss']
})
export class PostHeroComponent implements OnInit {

  @Output() onAdd: EventEmitter<INewHeroesData> = new EventEmitter<INewHeroesData>()
  @ViewChild('heroCard') inputRef!: ElementRef;

  iconHero = '';
  nameHero = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addPostHero(){
    if(this.iconHero.trim() && this.nameHero.trim()){
      const newHeroesData: INewHeroesData | any = {
        icon: this.iconHero,
        name: this.nameHero
      }
      this.onAdd.emit(newHeroesData)
    }
  }

  focusHeroCard(){
    this.inputRef.nativeElement.focus()
  }

  goToLogin() {
    this.router.navigate([''])
  }

}
