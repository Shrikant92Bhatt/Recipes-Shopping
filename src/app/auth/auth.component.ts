import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AppAuthComponent implements OnInit {
  public isLoginMode: Boolean = false;
  constructor () { }

  ngOnInit() { }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
