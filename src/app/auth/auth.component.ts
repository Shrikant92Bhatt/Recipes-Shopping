import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AppAuthComponent implements OnInit {
  public isLoginMode: Boolean = false;
  public isLoading = false;
  public error = null;

  @ViewChild('auth') authForm: NgForm;
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

  constructor (private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) { }

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
        this.showErrorAlert(errorMsg);
        // setTimeout(() => {
        //   this.error = null;
        // }, 7000);
      }
    );

    authForm.reset();
  }

  private showErrorAlert(message: string) {
    const alertFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertFactory);
    componentRef.instance.message = message;
  }

}
