import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";
import { MatError} from "@angular/material/form-field";

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
    console.log('here')
    this.authenticationService.login('admin1', 'admin1').subscribe();
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
    this.authenticationService.login('admin1', 'admin1')
      .subscribe(
        () => {
          console.log('ok')
          this.router.navigate(['/home']);
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
