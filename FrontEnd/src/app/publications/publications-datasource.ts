import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface PublicationsItem {
  datetime: string;
  author: string;
  title: string;
  body: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: PublicationsItem[] = [
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

/**
 * Data source for the Publications view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PublicationsDataSource extends DataSource<PublicationsItem> {
  data: PublicationsItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PublicationsItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: PublicationsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: PublicationsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'datetime': return compare(a.datetime, b.datetime, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
