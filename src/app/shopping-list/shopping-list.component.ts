import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private idChange: Subscription;
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.idChange = this.slService.ingredientChanged.subscribe(
      (ingredientsArray: Ingredients[]) => {
        this.ingredients = ingredientsArray;
      }
    );
  }
  ngOnDestroy() {
    this.idChange.unsubscribe();
  }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
}
