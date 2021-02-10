import { Injectable } from '@angular/core';

/**
 * All documentation stuff
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  /**
   * Set JWT Auth Token on localStorage.
   * @param token Value of Token
   */
  setToken(token: string | null): void {
    if (token) {
      localStorage.setItem('token', token);
    }
  }

  /**
   * Set RefreshToken value on localStorage.
   * @param token Value of refreshToken
   */
  setRefreshToken(token: string | null): void {
    if (token) {
      localStorage.setItem('refreshToken', token);
    }
  }
  /**
   * Get the token
   */
  get token(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Get the refresh token
   */
  get refreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }
}
