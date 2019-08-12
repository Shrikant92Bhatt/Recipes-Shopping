import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ingredients } from '../shared/ingredients.model'


@NgModule({
    imports: [BrowserModule],
    declarations: [],
    bootstrap: []
})
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredients[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredients[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients
    }
}