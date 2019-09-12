import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  public recipeChange = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'This is test Recipes',
  //     'This is test recipe description',
  //     // tslint:disable-next-line: max-line-length
  //     'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg',
  //     [new Ingredients('Meat', 5), new Ingredients('Chicken', 10)]
  //   ),
  //   new Recipe(
  //     'This is test2 Recipes',
  //     'This is test2 recipe description2',
  //     // tslint:disable-next-line: max-line-length
  //     'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg',
  //     [new Ingredients('Burger', 2), new Ingredients('Dosa', 15)]
  //   )
  // ];
  constructor(private slService: ShoppingListService) {}

  setRecipes(recipe: Recipe[]) {
    this.recipes = recipe;
    this.recipeChange.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredient(ingredients);
  }
  updateRecipe(id: number, formObj) {
    console.log(this.recipes, id, formObj);
    this.recipes[id] = formObj;
    this.recipeChange.next(this.recipes.slice());
  }
  addNewRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChange.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChange.next(this.recipes.slice());
  }
}
