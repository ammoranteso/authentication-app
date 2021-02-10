import { LoginComponent } from './pages/login/login.component';
import { AuthenticationWrapperComponent } from './wrapper/authentication-wrapper.component';

/**
 * Authentication components
 */
export const AUTHENTICATION_COMPONENTS: any[] = [
  AuthenticationWrapperComponent,
  LoginComponent,
];

/**
 * Components
 */

export * from './wrapper/authentication-wrapper.component';
export * from './pages/login/login.component';
