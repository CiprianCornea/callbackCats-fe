import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserRepository} from "../../services/user.repository";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  public testVar: User = {
    "username":"larisa",
    "password":"larisa",
    "email":"larisa@math.ubbcluj.ro",
    "isAdmin":false,
    "chaptersDone":"A"
  };


  constructor(
    private userRepository: UserRepository
  ) { }

  ngOnInit(): void {
    this.userRepository.signUp(this.testVar).subscribe(result => console.log(result));

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
