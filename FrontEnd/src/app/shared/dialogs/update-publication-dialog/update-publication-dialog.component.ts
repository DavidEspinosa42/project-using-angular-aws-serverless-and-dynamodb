import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Publication } from '../../interfaces/publication';

@Component({
  selector: 'app-update-publication-dialog',
  templateUrl: './update-publication-dialog.component.html',
  styleUrls: ['./update-publication-dialog.component.scss']
})
export class UpdatePublicationDialogComponent {
  public publicationForm = this.formBuilder.group({
    body: [this.data.body, Validators.required]
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Publication,
    private dialogRef: MatDialogRef<UpdatePublicationDialogComponent>,
    private formBuilder: FormBuilder
    ) {}

  public submit() {
    if (this.publicationForm.valid) {
      this.dialogRef.close(this.publicationForm.controls.body.value);
    }
  }

}
