import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {AuthDto} from "../models/dto/auth.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<AuthDto>;
  public currentUser: Observable<AuthDto>;
  private currentUserKey = 'currentUser';

  constructor(
    private http: HttpClient,
    private  router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<AuthDto>(JSON.parse(<string>localStorage.getItem(this.currentUserKey)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AuthDto {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<AuthDto> {
    return this.http.post<AuthDto>(`${environment.apiUrl}/login`, {
      'username': username,
      'password': password
    }).pipe(
      map(user => {
        localStorage.setItem(this.currentUserKey, JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.router.navigate(['/']);
        return user;
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
    this.router.navigate(['/login']);
    //this.currentUserSubject.next(null);
  }

}
