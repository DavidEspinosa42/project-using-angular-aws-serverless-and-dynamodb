import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Author } from '../shared/interfaces/author';
import { AuthorsService } from '../shared/services/authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  public authors: Author[];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit() {
    this.getAuthors();
  }

  public searchByAuthor(author: string): void {
    this.searchEvent.emit(author);
  }

  private getAuthors(): void {
    this.authorsService.getAuthors()
      .subscribe(
        (response: Author[]) => {
          this.authors = response;
        }, (error) => {
          console.error(error.message);
        });
  }

}
