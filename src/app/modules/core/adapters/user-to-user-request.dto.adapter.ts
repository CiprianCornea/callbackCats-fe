import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {UserResponseDto} from "../models/dto/user-response.dto";
import {UserRequestDto} from "../models/dto/user-request.dto";

@Injectable({
  providedIn: 'root'
})
export class UserToUserRequestDtoAdapter {

  constructor() { }

  adapt(item: User): UserRequestDto {
    let userRequestDto = new UserRequestDto();

    userRequestDto.username = item.username;
    userRequestDto.password = item.password;
    userRequestDto.email = item.email;
    userRequestDto.isAdmin = item.isAdmin;
    userRequestDto.chaptersDone = item.chaptersDone;

    return  userRequestDto;
  }

}
