import { Injectable, EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model'

@Injectable()
export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredients[]>();
    private ingredients: Ingredients[] = [
        new Ingredients('Tea ', 10),
        new Ingredients('Suger', 5),
        new Ingredients('Green-tea', 15)
    ];
    constructor() { }

    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredients(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredient(ingredients: Ingredients[]) {
        // ingredients.forEach((ingredient) => {
        //     this.addIngredients(ingredient);
        // })

        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

}