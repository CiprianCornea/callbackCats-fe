import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
