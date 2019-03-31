import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatSort, MatSortable } from '@angular/material';
import { PublicationsDataSource } from './publications-datasource';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit, OnChanges {
  @Input() search: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PublicationsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['datetime', 'author', 'title', 'body'];

  ngOnInit() {
    this.dataSource = new PublicationsDataSource(this.paginator, this.sort);
    this.sort.sort({
      id: 'datetime',
      start: 'desc'
    } as MatSortable);
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log(changes.search.currentValue);
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values

}

}
