import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FbCreateResponse, INewHeroesData} from "../../services/heroes-data.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {


  constructor(private http: HttpClient) { }

  create(hero: INewHeroesData): Observable<INewHeroesData>{
    return this.http.post<INewHeroesData>(`${environment.fbDbUrl}/heroes.json`, hero)
      .pipe(
        map((response: FbCreateResponse) => {
          const newHero = {
            ...hero,
            id: response.name,
            date: new Date(hero.date)
          }
          console.log(newHero)
          return newHero;
        })
      )
  }

  getAll(): Observable<INewHeroesData[]> {
    return this.http.get(`${environment.fbDbUrl}/heroes.json`)
      .pipe(map((response:{[key:string]: any}) => {
          return Object
            .keys(response)
            .map((key) => ({
              ...response[key],
              id: key,
              date: new Date(response[key].date)
            }))
        }))
  }

  getById(id: string): Observable<INewHeroesData> {
    return this.http.get<INewHeroesData>(`${environment.fbDbUrl}/heroes/${id}.json`)
      .pipe(map( (hero: INewHeroesData) => {
        console.log('hero', hero)
        return{
          ...hero,
          id,
          date: new Date(hero.date)
        }
      }))
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/heroes/${id}.json`)
  }

  update(hero: INewHeroesData): Observable<INewHeroesData> {
    return this.http.patch<INewHeroesData>(`${environment.fbDbUrl}/heroes/${hero.id}.json`, hero)
  }
}
