import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {AuthDto} from "../models/dto/auth.dto";
import {tap} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_NAME = 'access_token';
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  get token() {
    return localStorage.getItem(this.TOKEN_NAME)
  }

  constructor(
    private http: HttpClient
  ) {
    this._isLoggedIn$.next(!!this.token);
  }

  public login(username: string, password: string ) {
    return this.http.post<AuthDto>(`${environment.apiUrl}/login`,
      {'username': username,
        'password': password
      }).pipe(
      tap(
        (response: AuthDto) => {
          localStorage.setItem(this.TOKEN_NAME, response.token);
          this._isLoggedIn$.next(true);
        },
        (error: HttpErrorResponse) => {
          alert(error);
        }));
  }

}
