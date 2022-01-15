import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import {UserToUserRequestDtoAdapter} from "./adapters/user-to-user-request.dto.adapter";
import {UserResponseDtoToUserAdapter} from "./adapters/user-response.dto-to-user.adapter";



@NgModule({
  declarations: [
    LoginComponent,
    SignUpPageComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    UserToUserRequestDtoAdapter,
    UserResponseDtoToUserAdapter
  ]
})
export class CoreModule { }
