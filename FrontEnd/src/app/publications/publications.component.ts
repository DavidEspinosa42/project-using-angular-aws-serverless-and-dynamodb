import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatSortable } from '@angular/material';
import { PublicationsService } from '../shared/services/publications.service';
import { Publication } from '../shared/interfaces/publication';
import { DeleteDialogComponent } from '../shared/dialogs/delete-dialog/delete-dialog.component';
import { UpdatePublicationDialogComponent } from '../shared/dialogs/update-publication-dialog/update-publication-dialog.component';
import { AddPublicationDialogComponent } from '../shared/dialogs/add-publication-dialog/add-publication-dialog.component';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit, OnChanges {
  @Input() searchAuthor: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public publications: Publication[];
  public dataSource: MatTableDataSource<Publication>;
  public displayedColumns: string[] = ['datetime', 'author', 'title', 'body', 'actions'];

  public constructor(
    private publicationsService: PublicationsService,
    private dialog: MatDialog) {
      this.publicationsService.addPublicationButtonClicked$.subscribe(() => {
        this.addPublication();
      });
    }

  ngOnInit() {
    this.getPublications();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchAuthor && !changes.searchAuthor.isFirstChange()) {
      this.applyFilter(changes.searchAuthor.currentValue, 'author');
    }
  }

  public deletePublication(title: string): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, { data: title });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.publicationsService.deletePublication(result)
        .subscribe(() => {
          this.getPublications();
        }, (error: Error) => {
          console.error(error.message);
        });
      }
    });
  }

  public editPublication(row: Publication): void {
    const dialogRef = this.dialog.open(UpdatePublicationDialogComponent, { data: row });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result !== row.body) {
        this.publicationsService.updatePublication(row.title, result)
        .subscribe(() => {
          this.getPublications();
        }, (error: Error) => {
          console.error(error.message);
        });
      }
    });
  }

  public searchByTitle(search: string): void {
    this.applyFilter(search, 'title');
  }

  private applyFilter(filterValue: string, filterColumn: string): void {
    this.dataSource.filterPredicate = (data, filter: string): boolean => {
      return data[filterColumn].toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getPublications(): void {
    this.publicationsService.getPublications()
      .subscribe((response: Publication[]) => {
        this.publications = response;
        this.dataSource = new MatTableDataSource(this.publications);
        this.dataSource.paginator = this.paginator;
        this.sort.sort(({id: 'datetime', start: 'asc'}) as MatSortable);
        this.dataSource.sort = this.sort;
      }, (error: Error) => {
        console.error(error.message);
      });
  }

  private addPublication(): void {
    const dialogRef = this.dialog.open(AddPublicationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.publicationsService.createPublication(result)
        .subscribe(() => {
          this.getPublications();
        }, (error: Error) => {
          console.error(error.message);
        });
      }
    });
  }

}
