import { NgModule } from '@angular/core';
import { AppAuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule, FormsModule, AppSharedModule],
    declarations: [
        AppAuthComponent
    ],
    bootstrap: []
})
export class AuthModule { }
