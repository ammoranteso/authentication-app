import { NgModule } from '@angular/core';
import { AUTHENTICATION_ROUTES } from './authentication.routes';
import { AUTHENTICATION_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';

/**
 * Authentication Module
 */
@NgModule({
  declarations: [...AUTHENTICATION_COMPONENTS],
  imports: [
    SharedModule,
    AUTHENTICATION_ROUTES
  ]
})
export class AuthenticationModule { }
