import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationWrapperComponent } from './wrapper/authentication-wrapper.component';

/**
 * Authentication routes
 */
const routes: Routes = [
  {
    path: '',
    component: AuthenticationWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  }
];

/**
 * Authentication routes export
 */
export const AUTHENTICATION_ROUTES = RouterModule.forChild(routes);
