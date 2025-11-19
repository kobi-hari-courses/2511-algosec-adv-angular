import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'd1-simple-form' },
    { path: 'd1-simple-form', loadComponent: () => import('./pages/d1-simple-form/d1-simple-form') },
    { path: 'd2-simple-validations', loadComponent: () => import('./pages/d2-simple-validations/d2-simple-validations') },
    { path: 'd3-advanced-validations', loadComponent: () => import('./pages/d3-advanced-validations/d3-advanced-validations') },
    { path: 'd4-form-array', loadComponent: () => import('./pages/d4-form-array/d4-form-array') },
];
