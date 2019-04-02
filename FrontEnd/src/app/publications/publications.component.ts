import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PublicationsService } from '../shared/services/publications.service';
import { Publication } from '../shared/interfaces/publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit, OnChanges {
  @Input() searchTitle: string;
  @Input() searchAuthor: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public publications: Publication[];
  public dataSource: MatTableDataSource<Publication>;
  public displayedColumns: string[] = ['datetime', 'author', 'title', 'body'];

  public constructor(private publicationsService: PublicationsService) { }

  ngOnInit() {
    this.getPublications();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchAuthor && !changes.searchAuthor.isFirstChange()) {
      this.applyFilter(changes.searchAuthor.currentValue, 'author');
    }
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

  private searchByTitle(search: string): void {
    this.applyFilter(search, 'title');
  }

  private getPublications(): void {
    this.publicationsService.getPublications()
      .subscribe((response: Publication[]) => {
        this.publications = response;
        this.dataSource = new MatTableDataSource(this.publications);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, (error) => {
        console.error(error.message);
      });
  }

}
