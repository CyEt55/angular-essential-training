import { Routes, RouterModule, Router } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';

const newItemRoutes: Routes = [
    { path: 'add', component: MediaItemFormComponent }
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);
