import { Injectable } from '@angular/core';

export interface IHeroSkills {
  firstSkill?: string,
  secondSkill?: string,
  thirdSkill?: string,
  ultimate?: string
}

export interface FbCreateResponse{
  name: string
}

export interface INewHeroesData {
  id: string,
  name: string,
  icon: string;
  heroSkills: IHeroSkills,
  descriptionHero: string,
  counterPicks?: string[],
  date: Date
}

@Injectable({
  providedIn: 'root'
})
export class HeroesDataService {

  newHeroesData: INewHeroesData[] = [
    {
      id: '1',
      name: 'Abaddon',
      icon: 'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
      heroSkills: {
        firstSkill: 'MIST COIL',
        secondSkill: 'APHOTIC SHIELD',
        thirdSkill: 'CURSE OF AVERNUS',
        ultimate: 'BORROWED TIME'
      },
      descriptionHero: 'Carry, Durable, Support',
      counterPicks:[
        'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
        'https://ru.dotabuff.com/assets/heroes/axe-f182220d6fc301a4a43ed2351e5313bd53e552c8d8645feec5721298176d0f9c.jpg',
        'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
        'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
        'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
        'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
        'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
        'https://ru.dotabuff.com/assets/heroes/alchemist-6fdc0ee0f57a6d79d41a3e317674ff8493087febbb0e10b89460c8b18d0559d0.jpg'
      ],
      date: new Date()
    }
  ]

  getById(id:string){
    return this.newHeroesData.find(p => p.id === id)
  }

}



