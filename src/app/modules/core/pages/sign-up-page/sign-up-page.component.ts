import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
