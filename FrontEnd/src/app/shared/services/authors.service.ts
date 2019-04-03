import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../interfaces/author';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  public getAuthors(): Observable<Author[]> {
    return this.http.get('http://localhost:3000/author')
      .pipe(
        map((response: Author[]) =>
          response.sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
        ),
        catchError((error) => throwError(error))
      );
  }
}
