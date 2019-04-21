import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [ BrowserModule ],
    declarations: [  ],
    bootstrap:    [  ]
})
export class Recipe { 
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name:string, desc:string, imagePath:string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}