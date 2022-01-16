import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: 'login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    console.log(this.loginForm.controls['username'].value)
    // this.authenticationService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).subscribe();
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    console.log('im here')
    this.authenticationService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
      .subscribe(
        () => {
          console.log('ok')
          this.router.navigate(['/about']);
        },
        error => {
          this.error = error;

          if (this.error != '') {
            this.error = 'Invalid username or password';
          }

          this.loading = false;
        }
      );
  }
}
