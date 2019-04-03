import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../interfaces/author';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  public getAuthors(): Observable<Author[]> {
    return this.http.get(`${environment.endpoint}/author`)
      .pipe(
        map((response: Author[]) =>
          response.sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
        ),
        catchError((error) => throwError(error))
      );
  }

  public createAuthor(body: Author): Observable<any> {
    return this.http.post(`${environment.endpoint}/author`, body )
      .pipe(
        map((response) => response),
        catchError((error) => throwError(error))
      );
  }

  public deleteAuthor(name: string): Observable<any> {
    return this.http.delete(`${environment.endpoint}/author`, { params: { name } })
      .pipe(
        map((response) => response),
        catchError((error) => throwError(error))
      );
  }
}
