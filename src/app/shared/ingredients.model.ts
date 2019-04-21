import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [ BrowserModule ],
    declarations: [  ],
    bootstrap:    [  ]
})
export class Ingredients { 
    
    constructor( public name:string, public amount:number){
       
    }
}