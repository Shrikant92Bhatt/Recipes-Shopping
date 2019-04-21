import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guide';
  feactureType: string = 'recipe';

  onNavigate(e) {
    this.feactureType = e;
  }
}
