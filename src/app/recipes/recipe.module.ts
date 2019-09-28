import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from '../recipe-start/recipe-start.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipesRoutingModule } from './recipes-routing.moudule';
import { AppSharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        AppSharedModule,
        RouterModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ],
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        EditRecipeComponent,
    ],
    exports: [],
    bootstrap: []
})
export class RecipeModule { }
