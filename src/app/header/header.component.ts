import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  private isUserLogin = false;
  constructor (private dataStorageService: DataStorageService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isUserLogin = !!user;
    })
  }

  onSaveData() {
    this.dataStorageService.storeRecipe();
  }

  onFetchRecipes() {
    this.dataStorageService.fetchRecipe().subscribe();
  }

  onLogout() {
    this.authService.logOut();
    this.router.navigate(['/auth']);
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
