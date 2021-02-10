import { Routes } from '@angular/router';

/**
 * Project routes
 */
export const ROUTES: Routes = [

  {
    path: '',
    loadChildren: () => import('./modules/authentication/authentication.module')
      .then(m => m.AuthenticationModule)
  }
];
