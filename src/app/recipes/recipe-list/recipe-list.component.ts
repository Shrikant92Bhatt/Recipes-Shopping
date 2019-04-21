import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [

    new Recipe('This is test Recipes', 'This is test recipe description', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg'),

    new Recipe('This is test2 Recipes', 'This is test2 recipe description2', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg')

  ]

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);

  }

}
