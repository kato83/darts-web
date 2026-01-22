import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.component').then((module) => module.HomeComponent)
      }
    ],
  }
];
