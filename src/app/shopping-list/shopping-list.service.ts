import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { from } from 'rxjs';

@Injectable()
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredients[]>();
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

  addIngredient(ingredients: Ingredients[]) {
    // ingredients.forEach((ingredient) => {
    //     this.addIngredients(ingredient);
    // })

    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
