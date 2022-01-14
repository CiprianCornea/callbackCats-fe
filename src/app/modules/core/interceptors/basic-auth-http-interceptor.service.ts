// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
// import { AuthService } from "../services/auth.service";
// import {stringify} from "@angular/compiler/src/util";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class BasicAuthHttpInterceptorService implements HttpInterceptor {
//
//   constructor() { }
//
//   getAuthToken(): string {
//     return stringify(sessionStorage.getItem('token'));
//   }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//
//     if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
//       // req = req.clone({
//       //   headers: req.headers.set('Authorization', 'Baerer "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1eCIsInJvbGUiOlsiUk9MRV9BRE1JTiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvbG9naW4iLCJleHAiOjE2NDIxNDEwNTF9.FtT9MdALFX99HMKZQzNmQcnnvHPF0QQB20i_iglo7zQ"')
//       // })
//     }
//
//     return next.handle(req);
//
//   }
// }
