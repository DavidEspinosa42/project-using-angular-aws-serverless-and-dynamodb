import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatTooltipModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PublicationsComponent } from './publications/publications.component';
import { SearchComponent } from './publications/search/search.component';
import { AuthorComponent } from './author/author.component';
import { DeleteDialogComponent } from './shared/dialogs/delete-dialog/delete-dialog.component';
import { UpdatePublicationDialogComponent } from './shared/dialogs/update-publication-dialog/update-publication-dialog.component';
import { AddPublicationDialogComponent } from './shared/dialogs/add-publication-dialog/add-publication-dialog.component';
import { AddAuthorDialogComponent } from './shared/dialogs/add-author-dialog/add-author-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    SearchComponent,
    AuthorComponent,
    DeleteDialogComponent,
    UpdatePublicationDialogComponent,
    AddPublicationDialogComponent,
    AddAuthorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DeleteDialogComponent,
    UpdatePublicationDialogComponent,
    AddPublicationDialogComponent,
    AddAuthorDialogComponent
  ],
  providers: [
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
