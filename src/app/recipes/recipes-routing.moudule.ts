import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AuthGuard } from '../auth/auth.guard';
import { RecipeStartComponent } from '../recipe-start/recipe-start.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeResolverService } from './recipe-resolver.service';

const routes: Routes = [
    {
        path: 'recipes',
        component: RecipesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: EditRecipeComponent },
            {
                path: ':id',
                component: RecipeDetailComponent,
                resolve: [RecipeResolverService]
            },
            {
                path: ':id/edit',
                component: EditRecipeComponent,
                resolve: [RecipeResolverService]
            }
        ],

    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [],
    bootstrap: []
})
export class RecipesRoutingModule { }
