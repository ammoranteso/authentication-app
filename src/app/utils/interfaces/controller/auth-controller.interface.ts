import { ILoginUser } from '@domain/model/interfaces';
import { Observable } from 'rxjs';
/**
 * All documentation stuff
 */
export interface IAuthController {

  /**
   * All documentation stuff
   * @param user All documentation stuff
   */
  login(user: Partial<ILoginUser>): Observable<any> | void;

  /**
   * All documentation stuff
   * @param token All documentation stuff
   */
  refreshToken(token: string): Observable<any> | Observable<boolean>;
}
