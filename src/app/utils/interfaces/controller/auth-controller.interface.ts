import { HttpResponse } from "@angular/common/http";
import { ILoginUser } from "@domain/model/interfaces";
import { Observable } from "rxjs";
import { IFacadeApiMap } from "../auxiliary/facade-api-map.interface";

/**
 * TODO: Document IAuthController purpose
 */
export interface IAuthController {

  login(user: Partial<ILoginUser>): Observable<any> | void;

  refreshToken(token: string): Observable<any> | Observable<boolean>;

}
