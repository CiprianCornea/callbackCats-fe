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
  public email!: string;

  constructor(
    private userRepository: UserRepository
  ) { }

  getEmail() {
    console.log(this.email);
    return this.email;
  }

  ngOnInit(): void {

    // this.authService.login('admin1','admin1').subscribe();
    //this.getAccessToken(this.authRequest);
    //this.userRepository.login();
    let user = new User();
    user.username = "admin"
    user.password = "admin"
    user.email = "admin@bac360.com"
    user.isAdmin = false
    user.chaptersDone = "A"
    this.userRepository.signUp(user).subscribe(res => console.log(res));
   //  this.authService.login('testul1', 'parola1').subscribe(
   //    res => console.log(res)
   // );
   //  this.authService.login(user.username, user.password).subscribe();
    //this.authService.generateToken({username: 'testul1', password: 'parola1'}).subscribe();

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    // @ts-ignore
    signUpButton.addEventListener('click', () => {
      // @ts-ignore
      container.classList.add("right-panel-active");
    });

    // @ts-ignore
    signInButton.addEventListener('click', () => {
      // @ts-ignore
      container.classList.remove("right-panel-active");
    });
  }



  authRequest:any={
    "username":"ux",
    "password":"px"
  };
  response: any;

  // public getAccessToken(authRequest:any){
  //   let resp=this.authService.generateToken(authRequest);
  //   resp.subscribe(data=>this.accessApi(data));
  // }
  //
  //
  // public accessApi(token:any){
  //   let resp=this.authService.welcome(token);
  //   resp.subscribe(data=>this.response=data);
  // }

}
