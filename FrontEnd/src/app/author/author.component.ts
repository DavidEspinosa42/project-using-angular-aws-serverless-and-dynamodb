import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Author } from '../shared/interfaces/author';
import { AuthorsService } from '../shared/services/authors.service';
import { MatDialog } from '@angular/material';
import { AddAuthorDialogComponent } from '../shared/dialogs/add-author-dialog/add-author-dialog.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  public authors: Author[];

  constructor(
    private authorsService: AuthorsService,
    private dialog: MatDialog
  ) { }

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

  public createAuthor(): void {
    const dialogRef = this.dialog.open(AddAuthorDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        this.authorsService.createAuthor(result)
        .subscribe(() => {
          this.getAuthors();
        }, (error: Error) => {
          console.error(error.message);
        });
      }
    });
  }

}
