import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';


const routes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent },
]
@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    exports: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    bootstrap: []
})
export class ShoppingListModule { }
