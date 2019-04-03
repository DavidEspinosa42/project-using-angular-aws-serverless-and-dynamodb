import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../interfaces/author';

@Component({
  selector: 'app-add-publication-dialog',
  templateUrl: './add-publication-dialog.component.html',
  styleUrls: ['./add-publication-dialog.component.scss']
})
export class AddPublicationDialogComponent implements OnInit {
  public authors: Author[];
  public publicationForm = this.formBuilder.group({
    author: ['', Validators.required],
    title: ['', Validators.required],
    body: ['', Validators.required]
  });

  constructor(
    private dialogRef: MatDialogRef<AddPublicationDialogComponent>,
    private formBuilder: FormBuilder,
    private authorsService: AuthorsService
  ) { }

  ngOnInit() {
    this.getAuthors();
  }

  public submit() {
    if (this.publicationForm.valid) {
      this.dialogRef.close(this.publicationForm.value);
    }
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
