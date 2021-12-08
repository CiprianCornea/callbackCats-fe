import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserResponseDtoToUserAdapter} from "../adapters/user-response.dto-to-user.adapter";
import {UserToUserRequestDtoAdapter} from "../adapters/user-to-user-request.dto.adapter";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {UserRequestDto} from "../models/dto/user-request.dto";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {UserResponseDto} from "../models/dto/user-response.dto";

@Injectable({
  providedIn: 'root'
})
export class UserRepository {
  public apiServerUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private userResponseDtoToUserAdapter:UserResponseDtoToUserAdapter,
    private userToUserRequestDtoAdapter: UserToUserRequestDtoAdapter
  ) { }

  signUp(user: User): Observable<User> {
    let userRequest = this.userToUserRequestDtoAdapter.adapt(user);
    return this.http.post<UserResponseDto>(`${this.apiServerUrl}/sign-up`, userRequest).pipe(
      map(result => this.userResponseDtoToUserAdapter.adapt(result))
    );
  }
}
