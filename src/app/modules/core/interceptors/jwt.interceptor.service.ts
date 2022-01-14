import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthService) {
  }

  // @ts-ignore
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!this.checkIfUrlInWhiteList(request)) {
      return next.handle(request);
    }
    if(this.authenticationService.currentUserValue.access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authenticationService.currentUserValue.access_token}`
        }
      });
      return next.handle(request);
    }
  }

  checkIfUrlInWhiteList(request: HttpRequest<any>): boolean {
    let valid = true;

    environment.whiteList.forEach(urls => {
      if(request.url.endsWith(urls)) {
        valid = false;
      }
    });

    return valid;
  }
}
