import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private m_http: HttpClient) {}

  createEvent(form: JSON): Observable<any> {
    const URL = `${environment.backend.serverUrl}events`;
    return this.m_http.post<any>(URL, JSON.stringify(form));
  }

  getEventById(id: number): Observable<any> {
    const URL = `${environment.backend.serverUrl}events/${id}`;
    return this.m_http.get<any>(URL);
  }

  getEventList(from: number, limit: number): Observable<any[]> {
    const URL = `${environment.backend.serverUrl}events/?from=${from}&limit=${limit}`;
    return this.m_http.get<any>(URL);
  }

  search(terms: string): Observable<any[]> {
    const URL = `${environment.backend.serverUrl}events/search/?q=${terms}`;
    return this.m_http.get<any>(URL);
  }

}
