import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'd1-simple-form' },
    { path: 'd1-simple-form', loadComponent: () => import('./pages/d1-simple-form/d1-simple-form') },
];
