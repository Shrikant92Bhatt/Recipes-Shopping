import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-course-recipes-book-50267.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(data => console.log(data));
  }

  fetchRecipe() {
    return this.http
      .get<Recipe[]>(
        'https://ng-course-recipes-book-50267.firebaseio.com/recipes.json'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(resp => {
          this.recipeService.setRecipes(resp);
        })
      );
  }
}
