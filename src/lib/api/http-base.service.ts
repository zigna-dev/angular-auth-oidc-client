import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpBaseService {
  constructor(private readonly http: HttpClient) {}

  get<T>(url: string, params?: { [key: string]: any }): Observable<T> {
    return this.http.get<T>(url, params);
  }

  post<T>(url: string, body: any, options?: { [key: string]: any }): Observable<T> {
    console.log('post in HttpBaseService');
    console.log({
      url, 
      body,
      options
    })
    return this.http.post<T>(url, body, options);
  }
}
