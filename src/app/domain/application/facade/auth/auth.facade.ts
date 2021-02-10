import { Injectable } from '@angular/core';
import { IAuthController } from '@utils/interfaces/controller';
import { AuthApiService } from '@domain/infrastructure/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '@services/localStorage/local-storage.service';
import { ILoginUser } from '@domain/model/interfaces/login-user.interface';

/**
 * All documentation required
 */
@Injectable({
  providedIn: 'root'
})
export class AuthFacade implements IAuthController {

  constructor(
    private readonly api: AuthApiService,
    private readonly localStorage: LocalStorageService
  ) { }

  /**
   * All documentation required
   */
  login(user: Partial<ILoginUser>): Observable<boolean> {
    return this.api.login(user).pipe(
      map((response) => {
        const token: string | null = response.headers.get('x-token');
        const refreshToken: string | null = response.headers.get(
          'x-refresh-token'
        );
        if (token && refreshToken) {
          this.localStorage.setToken(token);
          this.localStorage.setRefreshToken(refreshToken);
          return true;
        } else {
          return false;
        }
      })
    );
  }
  /**
   * All documentation required
   * @param token All documentation stuff
   */
  refreshToken(token: string): Observable<any> | Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
