import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publication } from '../interfaces/publication';
import { Observable, throwError, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  constructor(private http: HttpClient) { }

  private addPublicationButton = new Subject();
  public addPublicationButtonClicked$ = this.addPublicationButton.asObservable();
  public addPublicationButtonClick() { this.addPublicationButton.next(); }

  public getPublications(): Observable<Publication[]> {
    return this.http.get('http://localhost:3000/publication')
      .pipe(
        map((response: Publication[]) => response),
        catchError((error) => throwError(error))
      );
  }

  public deletePublication(title: string): Observable<any> {
    return this.http.delete('http://localhost:3000/publication', { params: { title } })
      .pipe(
        map((response) => response),
        catchError((error) => throwError(error))
      );
  }

  public createPublication(body: Publication): Observable<any> {
    return this.http.post('http://localhost:3000/publication', body )
      .pipe(
        map((response) => response),
        catchError((error) => throwError(error))
      );
  }

  public updatePublication(title: string, description: string): Observable<any> {
    return this.http.put('http://localhost:3000/publication', description, { params: { title } })
      .pipe(
        map((response) => response),
        catchError((error) => throwError(error))
      );
  }

}
