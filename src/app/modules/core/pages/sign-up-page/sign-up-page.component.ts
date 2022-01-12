import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserRepository} from "../../services/user.repository";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  public testVar: User = {
    username:"aa",
    password:"aaa",
    email:"aa@math.ubbcluj.ro",
    isAdmin:false,
    chaptersDone:"B"
  };


  constructor(
    private userRepository: UserRepository,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    //this.userRepository.login();
    let user = new User();
    user.username = "testul1"
    user.password = "parola1"
    user.email = "testul1@bac360.com"
    user.isAdmin = true
    user.chaptersDone = "ABCD"
    //this.userRepository.signUp(user).subscribe(res => console.log(res));
    this.authService.login('testul1', 'parola1').subscribe(res => console.log(res));

    const signUpButton = document.getElementById('SignUp');
    const signInButton = document.getElementById('SignIn');
    const container = document.getElementById('container');

    // @ts-ignore
    signUpButton.addEventListener('click', () => {
      // @ts-ignore
      container.classList.add("right-panel-active")
    });

    // @ts-ignore
    signInButton.addEventListener('click', () => {
      // @ts-ignore
      container.classList.remove("right-panel-active")
    });
  }

}
