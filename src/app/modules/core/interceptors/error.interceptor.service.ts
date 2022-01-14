import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private loginService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
        if(err.status === 401) {
          this.loginService.logout();
        }
        const error = err.error.message || err.statusText;

        return throwError(error);
      }
    ));
  }
}
