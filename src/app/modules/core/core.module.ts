import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import {UserToUserRequestDtoAdapter} from "./adapters/user-to-user-request.dto.adapter";
import {UserResponseDtoToUserAdapter} from "./adapters/user-response.dto-to-user.adapter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    LoginComponent,
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    UserToUserRequestDtoAdapter,
    UserResponseDtoToUserAdapter
  ]
})
export class CoreModule { }
