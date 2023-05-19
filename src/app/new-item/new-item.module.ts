import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MediaItemFormComponent } from "./media-item-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        MediaItemFormComponent
    ]
})

export class NewItemModule{}