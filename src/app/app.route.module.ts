import { NgModule } from '@angular/core';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './recipes/recipe.module#RecipeModule', canLoad: [AuthGuard] },
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
  // { path: '/', component: Component },
  // { path: '**', pathMatch:'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  declarations: [],
  bootstrap: []
})
export class AppRoutingModule { }
