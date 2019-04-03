import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publication } from '../interfaces/publication';
import { Observable, throwError, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  constructor(private http: HttpClient) { }

  private addPublicationButton = new Subject();
  public addPublicationButtonClicked$ = this.addPublicationButton.asObservable();
  public addPublicationButtonClick() { this.addPublicationButton.next(); }

  public getPublications(): Observable<Publication[]> {
    return this.http.get(`${environment.endpoint}/publication`)
      .pipe(
        map((response: Publication[]) => response),
        catchError((error) => throwError(error))
      );
  }

  public deletePublication(title: string): Observable<any> {
    return this.http.delete(`${environment.endpoint}/publication`, { params: { title } })
      .pipe(
        map((response) => response),
        catchError((error) => throwError(error))
      );
  }

  public createPublication(body: Publication): Observable<any> {
    return this.http.post(`${environment.endpoint}/publication`, body )
      .pipe(
        map((response) => response),
        catchError((error) => throwError(error))
      );
  }

  public updatePublication(title: string, description: string): Observable<any> {
    return this.http.put(`${environment.endpoint}/publication`, description, { params: { title } })
      .pipe(
        map((response) => response),
        catchError((error) => throwError(error))
      );
  }

}
