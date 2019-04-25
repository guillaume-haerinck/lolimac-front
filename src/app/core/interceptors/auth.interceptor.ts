import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
    constructor(private m_authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /*
      if (this.m_authService.retrieveJwtToken() === undefined) {
        if (request.url.includes(environment.backend.serverUrl + 'v1/users/visitor-jwt')) {
          return next.handle(request);
        } else {
          return this.m_authService.getVisitorJwt()
            .pipe(switchMap(token => {
              if (request.url.includes(environment.backend.serverUrl)) {
                request = this.includeJwt(request);
              }
              return next.handle(request);
            }));
        }
      } else {
        if (request.url.includes(environment.backend.serverUrl)) {
          request = this.includeJwt(request);
        }
        return next.handle(request);
      }
      */
        return next.handle(request);
    }
}
