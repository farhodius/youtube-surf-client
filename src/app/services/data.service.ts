import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map, tap} from 'rxjs/operators';
import {ResourceInterface} from '../interfaces/resource/ResourceInterface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  search<T>(type: string, q: string, limit: number): Observable<T> {
    return this.http
      .get<T>(environment.apiBaseUrl + '/api/v1/search/' + type + '?q=' + q + '&limit=' + limit)
      .pipe(catchError(this.handleError));
  }

  getResources<T>(type: string, q: string, limit: number): Observable<T> {
    return this.http
      .get<T>(
        environment.apiBaseUrl + '/api/v1/resource?type=' + type + '&q=' + q + '&limit=' + limit
      )
      .pipe(catchError(this.handleError));
  }

  saveResource<T extends ResourceInterface>(resource: T): Observable<T> {
    return this.http
      .post<T>(environment.apiBaseUrl + '/api/v1/resource', resource, {headers: this.headers})
      .pipe(catchError(this.handleError));
  }

  removeResource<T extends ResourceInterface>(resource: T): Observable<T> {
    return this.http
      .delete<T>(environment.apiBaseUrl + '/api/v1/resource/' + resource.id, {
        headers: this.headers
      })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Likely client side or network error
      console.log(error.error.message);
    } else {
      // Bad response from API
      console.log(`Response Code: ${error.status}`, `Response: `, error.error);
    }
    return throwError('Something went wrong. Please try again later.');
  }
}
