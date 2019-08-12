import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;



  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }
  onSubmit() {
    const newIngredients = new Ingredients(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
    this.slService.addIngredients(newIngredients);
  }

}
