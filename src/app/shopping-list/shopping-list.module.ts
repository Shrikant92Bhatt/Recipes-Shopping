import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { AppSharedModule } from '../shared/shared.module';


const routes: Routes = [
    { path: '', component: ShoppingListComponent },
]
@NgModule({
    imports: [AppSharedModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
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
