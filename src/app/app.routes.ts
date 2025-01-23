import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'dashboard'
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then(c => c.ContactComponent),
    },
    {
        path: 'new-contact',
        loadComponent: () => import('./newcontact/newcontact.component').then(c => c.NewcontactComponent),
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
    },

];