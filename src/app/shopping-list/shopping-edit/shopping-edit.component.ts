import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  name: string;
  amount: number;
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode: Boolean = false;
  editItemIndex: number;
  editedItem: Ingredients;
  constructor (private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(index => {
      this.editMode = true;
      this.editItemIndex = index;
      this.editedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }
  onSubmit(f: NgForm) {
    const newIngredients = new Ingredients(f.value.name, f.value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editItemIndex, newIngredients);
    } else {
      this.slService.addIngredients(newIngredients);
    }
    this.editMode = false;
    this.editItemIndex = undefined;
    f.reset();
    console.log(f);
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelet(index) {
    this.slService.deletIngridient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
