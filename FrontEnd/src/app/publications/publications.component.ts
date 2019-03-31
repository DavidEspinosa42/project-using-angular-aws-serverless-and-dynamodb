import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSortable } from '@angular/material';
import { PublicationsDataSource } from './publications-datasource';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
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
    } as MatSortable
  );
  }
}
