import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {AuthService} from "../admin/shared/services/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.auth.isAuthenticated()){
      req = req.clone({
        setParams:{
            auth: this.auth.token
        }
      })
    }
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error)
        if(error.status === 401) {
          this.auth.logout();
          this.router.navigate(['/admin', 'login'], {
            queryParams: {
              authFailed: true
            }
          }).then(()=>{})
        }
        return throwError(error)
      })
    );
  }
}
