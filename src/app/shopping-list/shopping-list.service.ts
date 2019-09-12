import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';

@Injectable()
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredients[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredients[] = [
    new Ingredients('Tea ', 10),
    new Ingredients('Suger', 5),
    new Ingredients('Green-tea', 15)
  ];
  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredients(ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getIngredient(index) {
    return this.ingredients[index];
  }

  addIngredient(ingredients: Ingredients[]) {
    // ingredients.forEach((ingredient) => {
    //     this.addIngredients(ingredient);
    // })

    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngrident: Ingredients) {
    this.ingredients[index] = newIngrident;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deletIngridient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
