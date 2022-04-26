import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../interfaces/user";
import {catchError, Observable, Subject, tap} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IFbAuthResponse} from "../../../../environments/interface";

enum AUTH_STORAGE_KEYS {
  TOKEN = 'fb-token',
  TOKEN_EXP = 'fb-token-exp'
}

@Injectable({providedIn:'root'})
export class AuthService {

  public error$: Subject<string> = new Subject<string>()

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}


  get token(): string {
    const expDate = new Date(localStorage.getItem(AUTH_STORAGE_KEYS.TOKEN_EXP)!);
      if (new Date() > expDate){
        this.logout()
        return null!
      }
    return localStorage.getItem(AUTH_STORAGE_KEYS.TOKEN)!
  }

  login(user: User): Observable<any>{
    user.returnSecureToken = true;
    return  this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError((err) => ([this.handleError(err)]))
      )
  }

  logout() {
    this.setToken(null)
    this.router.navigate(['/admin','login']).then(()=>{})
  }

  isAuthenticated(): Promise<boolean> | boolean{
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse){
    const {message} = error.error.error

    switch (error.error.error.message){
      case 'INVALID_PASSWORD':
        this.error$.next('Invalid Password')
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email not found')
        break;
    }

    throw new Error(message)
  }

  private setToken(response: IFbAuthResponse | any) {
    if(response){
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem(AUTH_STORAGE_KEYS.TOKEN, response.idToken);
      localStorage.setItem(AUTH_STORAGE_KEYS.TOKEN_EXP, expDate.toString())
    }
    if(!response){
      localStorage.clear()
    }
  }

}

