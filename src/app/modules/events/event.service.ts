import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private m_http: HttpClient) {}

  createSimpleEvent(name: string, imageUrl: string): Observable<any> {
    const URL = `${environment.backend.serverUrl}events`;
    return this.m_http.post<any>(URL, {"title": name, "photo_url": imageUrl});
  }

  getEventById(id: number): Observable<any> {
    const URL = `${environment.backend.serverUrl}events/${id}`;
    return this.m_http.get<any>(URL);
  }

  getEventList(from: number, limit: number): Observable<any> {
    const URL = `${environment.backend.serverUrl}events/?from=${from}&limit=${limit}`;
    return this.m_http.get<any>(URL);
  }

}
