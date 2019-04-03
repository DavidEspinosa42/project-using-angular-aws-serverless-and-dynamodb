import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PublicationsService } from './shared/services/publications.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public searchAuthor: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private publicationsService: PublicationsService
  ) {}

  public searchByAuthor(searchEvent: string): void {
    this.searchAuthor = searchEvent;
  }

  public addPublication(): void {
    this.publicationsService.addPublicationButtonClick();
  }

}
