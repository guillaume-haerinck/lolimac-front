import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

// 3rd party
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// custom
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private m_authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(error => {
            if (error.status === 401) {
                // logout if token expired
                this.m_authService.redirectUrl = location.origin;
                this.m_authService.logout();
                location.reload(true); // TODO redirect to login page from here
            }
            return throwError(error);
        }));
    }
}
