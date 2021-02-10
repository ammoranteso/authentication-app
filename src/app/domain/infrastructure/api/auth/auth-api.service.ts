import { Injectable } from '@angular/core';
import { IAuthController } from '@utils/interfaces/controller';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ILoginUser } from '@domain/model/interfaces';
import { Observable } from 'rxjs';
import { getApiUrl } from '@utils/functions';
import { ApiController } from '@utils/enums/auxiliary';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';

/**
 * TODO: Document AuthApiService
 */
@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements IAuthController {

  constructor(
    private readonly http: HttpClient
  ) { }
  login(user: Partial<ILoginUser>): Observable<HttpResponse<void>> {
    return this.http.post<void>(getApiUrl(ApiController.SIGN_IN), user, {
      observe: 'response',
    });
  }
  refreshToken(token: string): Observable<any> | Observable<boolean> {
    throw new Error('Method not implemented.');
  }


}
