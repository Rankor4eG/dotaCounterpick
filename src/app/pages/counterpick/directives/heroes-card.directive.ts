import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHeroesCard]'
})
export class HeroesCardDirective {

  @Input('appHeroesCard') fontWeight='';
  @Input() color: string = '';

  @HostBinding('style.color') cardColor = ''
  @HostBinding('style.fontWeight') cardWeight = ''

  constructor() {
  }

  @HostListener('mouseenter') onEnter() {
    this.cardColor = this.color
    this.cardWeight = this.fontWeight

  }

  @HostListener('mouseleave') onLeave() {
    this.cardColor = ''
    this.cardWeight = ''
  }


}
