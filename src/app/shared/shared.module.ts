import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnersComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [
        DropdownDirective,
        LoadingSpinnersComponent,
        AlertComponent,
        PlaceholderDirective
    ],
    exports: [
        DropdownDirective,
        LoadingSpinnersComponent,
        AlertComponent,
        PlaceholderDirective,
        CommonModule
    ],
    entryComponents: [AlertComponent],

    bootstrap: []
})
export class AppSharedModule { }
