import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-author-dialog',
  templateUrl: './add-author-dialog.component.html',
  styleUrls: ['./add-author-dialog.component.scss']
})
export class AddAuthorDialogComponent implements OnInit {
  public authorForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    DOB: ['', Validators.required]
  });

  constructor(
    private dialogRef: MatDialogRef<AddAuthorDialogComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  public submit() {
    if (this.authorForm.valid) {
      this.dialogRef.close(this.authorForm.value);
    }
  }

}
