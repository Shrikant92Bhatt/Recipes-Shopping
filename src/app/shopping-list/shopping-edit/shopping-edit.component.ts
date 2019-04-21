import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientsAdded = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    const newIngredients = new Ingredients(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
    this.ingredientsAdded.emit(newIngredients)
  }

}
