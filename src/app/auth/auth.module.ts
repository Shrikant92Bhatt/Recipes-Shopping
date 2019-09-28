import { NgModule } from '@angular/core';
import { AppAuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, FormsModule, AppSharedModule, RouterModule.forChild([
        { path: '', component: AppAuthComponent }
    ])],
    declarations: [
        AppAuthComponent
    ],
    bootstrap: []
})
export class AuthModule { }
