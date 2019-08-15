import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: EditRecipeComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: EditRecipeComponent }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent }
  // { path: '/', component: Component },
  // { path: '**', pathMatch:'full', redirectTo: '/' }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  bootstrap: []
})
export class AppRoutingModule {}
