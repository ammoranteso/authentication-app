import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '@services/localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class HeadersInterceptor implements HttpInterceptor {
  constructor(private readonly localStorageService: LocalStorageService) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Accept')) {
      req = req.clone({
        headers: req.headers.append('Accept', 'application/json'),
      });
    }
    if (req.headers.has('Authorization')) {
      req = req.clone({
        headers: req.headers.append(
          'Authorization',
          `Bearer ${this.localStorageService.token}`
        ),
      });
    }
    return next.handle(req);
  }
}
