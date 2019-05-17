import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';

// 3rd party
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// custom
import { AuthService } from '../services/auth.service';
import { SnackBarService } from '../services/snack-bar.service';

@Injectable({
    providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private m_authService: AuthService, private m_router: Router, private m_snackbar: SnackBarService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(error => {
            switch(error.status) {
                case 0:
                  this.m_snackbar.open('Le serveur est déconnecté !', 'Oh, zut alors', 10000);
                  break;

                case 401:
                    // logout if token expired
                    this.m_authService.redirectUrl = location.origin;
                    this.m_authService.logout();
                    this.m_router.navigate(['/login']);
                    break;
              
                default:
                  if (error.message.search("Http failure during parsing") == 0) {
                    this.m_snackbar.open('La réponse formulée par le serveur est incorrecte !', 'Oh, zut alors', 10000);
                  }
                  break;
              }
            return throwError(error);
        }));
    }
}
