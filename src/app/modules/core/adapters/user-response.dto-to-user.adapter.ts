import { Injectable } from '@angular/core';
import {UserResponseDto} from "../models/dto/user-response.dto";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserResponseDtoToUserAdapter {

  constructor() { }

  adapt(item: UserResponseDto): User {
    let user: User = new User();

    user.username = item.username;
    user.password = item.password;
    user.email = item.email;
    user.isAdmin = item.isAdmin;
    user.chaptersDone = item.chaptersDone;

    return user;
  }

}
