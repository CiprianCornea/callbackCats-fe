import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {AuthDto} from "../models/dto/auth.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private currentUserSubject: BehaviorSubject<AuthDto>;
  //public currentUser: Observable<AuthDto>;
  //private currentUserKey = 'currentUser';

  constructor(
    private http: HttpClient
    //private router: Router
  ) {
    //this.currentUserSubject = new BehaviorSubject<AuthDto>(JSON.parse(<string>localStorage.getItem(this.currentUserKey)));
    //this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): AuthDto {
  //   return this.currentUserSubject.value;
  // }

  login(username: string, password: string) {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
    });

    let body = `username=${username}&password=${password}`;
    return this.http.post<AuthDto>(`${environment.apiUrl}/login`, {
      'username': username,
      'password': password
    }, {headers: headers})
      // .pipe(
      //   map( userData => {
      //     sessionStorage.setItem("username", username);
      //     let tokenStr = "Barer" + userData.access_token;
      //     console.log(tokenStr);
      //     sessionStorage.setItem("token", tokenStr);
      //     return userData;
      //     })
      // );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem("username");
  }

  // public generateToken(request: any) {
  //   return this.http.post<string>(`${environment.apiUrl}/login`, request, {responseType: 'text' as 'json'});
  // }
  //
  // public welcome(token: any) {
  //   let tokenStr = 'Bearer ' + token;
  //   const headers = new HttpHeaders().set('Authorization', tokenStr);
  //   return this.http.get<string>("http://localhost:8080/", {headers, responseType: 'text' as 'json' });
  // }
  //
  //
  // logout(): void {
  //   localStorage.removeItem(this.currentUserKey);
  //   this.router.navigate(['/login']);
  //   this.currentUserSubject.next({});
  // }

}
