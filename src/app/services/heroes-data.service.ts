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
    },
    // {
    //   id: '2',
    //   name: 'Alchemist',
    //   icon: 'https://ru.dotabuff.com/assets/heroes/alchemist-6fdc0ee0f57a6d79d41a3e317674ff8493087febbb0e10b89460c8b18d0559d0.jpg',
    //   heroSkills: {
    //     firstSkill: 'MIST COIL',
    //     secondSkill: 'APHOTIC SHIELD',
    //     thirdSkill: 'CURSE OF AVERNUS',
    //     ultimate: 'BORROWED TIME'
    //   },
    //   descriptionHero: 'Carry, Durable, Support',
    //   counterPicks: [
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg'
    //   ],
    //   date: new Date()
    // },
    // {
    //   id: '3',
    //   name: 'Axe',
    //   icon: 'https://ru.dotabuff.com/assets/heroes/axe-f182220d6fc301a4a43ed2351e5313bd53e552c8d8645feec5721298176d0f9c.jpg',
    //   heroSkills: {
    //     firstSkill: 'MIST COIL',
    //     secondSkill: 'APHOTIC SHIELD',
    //     thirdSkill: 'CURSE OF AVERNUS',
    //     ultimate: 'BORROWED TIME'
    //   },
    //   descriptionHero: 'Carry, Durable, Support',
    //   counterPicks: [
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg'
    //   ],
    //   date: new Date()
    // },
    // {
    //   id: '4',
    //   name: 'Beastmaster',
    //   icon: 'https://www.dotabuff.com/assets/heroes/beastmaster-862e7387b9b589ccb401a7205988b65e8aaa7263a4833fb08086de9872e3cb3a.jpg',
    //   heroSkills: {
    //     firstSkill: 'WILD AXES',
    //     secondSkill: 'CALL OF THE WILD',
    //     thirdSkill: 'INNER BEAST',
    //     ultimate: 'PRIMAL ROAR'
    //   },
    //   descriptionHero: 'Melee, Disabler, Durable, Initiator, Nuker',
    //   counterPicks: [
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg'
    //   ],
    //   date: new Date()
    // },
    // {
    //   id: '5',
    //   name: 'Brewmaster',
    //   icon: 'https://ru.dotabuff.com/assets/heroes/brewmaster-b5478a249b90ea0aba2a5e77eff57a332f9b783c18a4993d82fdb7c8fb5c0f50.jpg',
    //   heroSkills: {
    //     firstSkill: 'MIST COIL',
    //     secondSkill: 'APHOTIC SHIELD',
    //     thirdSkill: 'CURSE OF AVERNUS',
    //     ultimate: 'BORROWED TIME'
    //   },
    //   descriptionHero: 'Carry, Durable, Support',
    //   counterPicks: [
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg'
    //   ],
    //   date: new Date()
    // },
    // {
    //   id: '6',
    //   name: 'Bristleback',
    //   icon: 'https://ru.dotabuff.com/assets/heroes/bristleback-7d4ab0005807d1e8733f4a1abd1ffa1b632900037b9949f5683b512f7eb0b08e.jpg',
    //   heroSkills: {
    //     firstSkill: 'MIST COIL',
    //     secondSkill: 'APHOTIC SHIELD',
    //     thirdSkill: 'CURSE OF AVERNUS',
    //     ultimate: 'BORROWED TIME'
    //   },
    //   descriptionHero: '1Carry, Durable, Support',
    //   counterPicks: [
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg'
    //   ],
    //   date: new Date()
    // },
    // {
    //   id: '7',
    //   name: 'Centaur Warrunner',
    //   icon: 'https://www.dotabuff.com/assets/heroes/centaur-warrunner-23562ed3be99ee78f0a6f2d2e3ac4f9962d3070907bf72d44dee87b4e386d062.jpg',
    //   heroSkills: {
    //     firstSkill: 'HOOF STOMP',
    //     secondSkill: 'DOUBLE EDGE',
    //     thirdSkill: 'RETALIATE',
    //     ultimate: 'STAMPEDER'
    //   },
    //   descriptionHero: 'Melee, Disabler, Durable, Escape, Initiator, Nuker',
    //   counterPicks: [
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg'
    //   ],
    //   date: new Date()
    // },
    // {
    //   id: '8',
    //   name: 'Chaos Knight',
    //   icon: 'https://ru.dotabuff.com/assets/heroes/chaos-knight-77b2b6ab77f1ebd4d01e7711b418d640f6f8c6397b189027508573b20e39e0d5.jpg',
    //   heroSkills: {
    //     firstSkill: 'CHAOS BOLT',
    //     secondSkill: 'REALITY RIFT',
    //     thirdSkill: 'CHAOS STRIKE',
    //     ultimate: 'PHANTASM'
    //   },
    //   descriptionHero: 'Melee, Carry, Disabler, Durable, Initiator, Pusher',
    //   counterPicks: [
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg'
    //   ],
    //   date: new Date()
    // },
    // {
    //   id: '9',
    //   name: 'Clockwerk',
    //   icon: 'https://www.dotabuff.com/assets/heroes/clockwerk-a74f2d01a4603389a76180022625d4ed9737f4333d01eae1319081423ffda8e6.jpg',
    //   heroSkills: {
    //     firstSkill: 'BATTERY ASSAULT',
    //     secondSkill: 'POWER COGS',
    //     thirdSkill: 'ROCKET FLARE',
    //     ultimate: 'MOVERCLOCKINGD'
    //   },
    //   descriptionHero: 'Melee, Disabler, Durable, Initiator, Nuker',
    //   counterPicks: [
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg'
    //   ],
    //   date: new Date()
    // },
    // {
    //   id: '10',
    //   name: 'DOOM',
    //   icon: 'https://www.dotabuff.com/assets/heroes/doom-a9944c121b3f00d505508f500bac1ed3bdf07c557d564eb95256f80499656436.jpg',
    //   heroSkills: {
    //     firstSkill: 'DEVOURQ',
    //     secondSkill: 'SCORCHED EARTH',
    //     thirdSkill: 'INFERNAL BLADE',
    //     ultimate: 'DOOM'
    //   },
    //   descriptionHero: 'Carry, Disabler, Durable, Initiator, Nuker',
    //   counterPicks: [
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg'
    //   ],
    //   date: new Date()
    // },
    // {
    //   id: '11',
    //   name: 'Dragon Knight',
    //   icon: 'https://ru.dotabuff.com/assets/heroes/dragon-knight-a42ca0a4d87678a41c0fef7c3b380075b4b8065364c1c05c342a0f1feb8fd594.jpg',
    //   heroSkills: {
    //     firstSkill: 'BREATHE FIRE',
    //     secondSkill: 'DRAGON TAIL',
    //     thirdSkill: 'DRAGON BLOOD',
    //     ultimate: 'ELDER DRAGON FORM'
    //   },
    //   descriptionHero: 'Carry, Disabler, Durable, Initiator, Nuker, Pusher',
    //   counterPicks: [
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg'
    //   ],
    //   date: new Date()
    // },
    // {
    //   id: '12',
    //   name: 'Earthshaker',
    //   icon: 'https://ru.dotabuff.com/assets/heroes/earthshaker-215714e59ae202448c7fcaff84ff9fc7c925c30b9cb19c60d1b9aecf57bd9bf2.jpg',
    //   heroSkills: {
    //     firstSkill: 'FISSUREQ',
    //     secondSkill: 'ENCHANT TOTEM',
    //     thirdSkill: 'AFTERSHOCK',
    //     ultimate: 'ECHO SLAM'
    //   },
    //   descriptionHero: 'Disabler, Initiator, Nuker, Support',
    //   counterPicks: [
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg',
    //     'https://ru.dotabuff.com/assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg'
    //   ],
    //   date: new Date()
    // }
  ]

  getById(id:string){
    return this.newHeroesData.find(p => p.id === id)
  }

}



