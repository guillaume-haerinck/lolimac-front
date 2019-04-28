import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// 3rd party
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Custom
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl = '';
  private m_bLoggedIn = false;

  constructor(private m_http: HttpClient) {
    if (localStorage.getItem('jwt')) {
      this.m_bLoggedIn = true;
    }
  }

  login(username: string, password: string): Observable<any> {
    const URL = `${environment.backend.serverUrl}login`;
    return this.m_http.post<any>(URL, {"pseudo": username, "pwd": password})
      .pipe(
        tap(
          data => { // logged-in
            if ((data.jwt) && (data.id_user)) {
              localStorage.setItem('jwt', data.jwt);
              localStorage.setItem('userId', data.id_user);
              this.m_bLoggedIn = true;
            } else {
              console.error('[Login] Mauvaise structure de la réponse');
            }
          },
          error => { // bad credentials or internal error
            console.error(error);
          }
        )
      );
  }

  logout(): void {
    localStorage.removeItem('jwt');
    this.m_bLoggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.m_bLoggedIn;
  }

  getToken(): string {
    return localStorage.getItem('jwt');
  }

  getUserId(): number {
    return Number(localStorage.getItem('userId'));
  }
}
