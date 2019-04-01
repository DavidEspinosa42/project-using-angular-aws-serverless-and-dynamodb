import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface Publication {
  datetime: string;
  author: string;
  title: string;
  body: string;
}

const publications: Publication[] = [
  {
      datetime: '2019-03-28T13:55:10.308Z',
      author: 'Delia Owens',
      title: 'Where The Cradads Sing',
      body: 'In a quiet town on the North Carolina coast in 1969, a young woman who survived alone in the marsh becomes a murder suspect.'
  },
  {
      datetime: '2019-03-25T13:26:10.308Z',
      author: 'Harlan Coben',
      title: 'Run Away',
      body: 'A family is torn apart when the daughter becomes addicted to drugs and goes missing.'
  },
  {
      datetime: '2019-03-24T13:25:10.308Z',
      author: 'Clive Cussler',
      title: 'Celtic Empire',
      body: 'The 25th book in the Dirk Pitt series.'
  },
  {
      datetime: '2019-03-21T19:00:10.308Z',
      author: 'James Patterson',
      title: 'The First Lady',
      body: 'Sally Grissom investigates the disappearance of President Harrison Tucker’s wife.'
  },
  {
      datetime: '2019-03-11T12:44:10.308Z',
      author: 'A.J. Finn',
      title: 'The Woman In The Window',
      body: 'A recluse who drinks heavily and takes prescription drugs may have witnessed a crime across from her Harlem townhouse.'
  },
  {
      datetime: '2019-03-12T16:16:10.308Z',
      author: 'C.J. Box',
      title: 'Wolf Pack',
      body: 'The Wyoming game wardens Joe Pickett and Katelyn Hamm take on killers working for the Sinaloa cartel.'
  },
  {
      datetime: '2019-03-22T15:55:10.308Z',
      author: 'Pam Jenoff',
      title: 'The Lost Girls Of Paris',
      body: 'Grace Healey investigates the fates of 12 women who were sent to occupied Europe to help the resistance during World War II.'
  },
  {
      datetime: '2019-03-22T11:55:10.308Z',
      author: 'Greg Iles',
      title: 'Cemetery Road',
      body: 'The journalist Marshall McEwan returns to his hometown, which is shaken by two deaths and an economy on the brink.'
  },
  {
      datetime: '2019-03-11T14:50:10.308Z',
      author: 'Danielle Steel',
      title: 'Silent Night',
      body: 'After tragedy strikes, a child TV star loses her memory and ability to speak.'
  },
  {
      datetime: '2019-03-12T14:35:10.308Z',
      author: 'Alex Michaelides',
      title: 'The Silent Patient',
      body: 'Theo Faber looks into the mystery of a famous painter who stops speaking after shooting her husband.'
  },
  {
      datetime: '2019-03-13T13:33:10.308Z',
      author: 'Kate Quinn',
      title: 'The Huntress',
      body: 'A British journalist and a Russian female bomber pilot go after a Nazi war criminal.'
  },
  {
      datetime: '2019-03-14T14:55:10.308Z',
      author: 'Danielle Steel',
      title: 'Fall from Grace',
      body: 'The gripping story of a woman who loses everything—her husband, her home, her sense of self and safety, and her freedom.'
  }
];

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
  public dataSource: MatTableDataSource<Publication> = new MatTableDataSource(publications);
  public displayedColumns: string[] = ['datetime', 'author', 'title', 'body'];

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchAuthor && !changes.searchAuthor.isFirstChange()) {
      this.applyFilter(changes.searchAuthor.currentValue, 'author');
    }

    if (changes.searchTitle && !changes.searchTitle.isFirstChange()) {
      this.applyFilter(changes.searchTitle.currentValue, 'title');
    }
  }

  applyFilter(filterValue: string, filterColumn: string) {
    this.dataSource.filterPredicate = (data, filter: string): boolean => {
      return data[filterColumn].toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator.firstPage();
  }

}
