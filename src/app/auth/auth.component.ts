import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AppAuthComponent implements OnInit {
  public isLoginMode: Boolean = false;
  public isLoading = false;
  public error = null;

  @ViewChild('auth') authForm: NgForm;

  constructor (private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  authSubmit(authForm: NgForm) {
    if (authForm.invalid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;
    console.log(authForm);

    let authObj: Observable<AuthResponseData>;
    if (this.isLoginMode) {
      this.isLoading = true;
      authObj = this.authService.signIn(email, password);
    } else {
      this.isLoading = true;
      authObj = this.authService.signUp(email, password);
    }

    authObj.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMsg => {
        console.error(errorMsg);
        this.isLoading = false;
        this.error = errorMsg;
        // setTimeout(() => {
        //   this.error = null;
        // }, 7000);
      }
    );

    authForm.reset();
  }
}
