import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Authors {
  name: string;
  email: string;
  DOB: string;
}

const authors: Authors[] = [
  {
    name: 'Delia Owens',
    email: 'delia@example.com',
    DOB: '1990-03-22'
  },
  {
    name: 'Harlan Coben',
    email: 'harlan@example.com',
    DOB: '1970-05-21'
  },
  {
    name: 'Clive Cussler',
    email: 'clive@example.com',
    DOB: '1985-03-12'
  },
  {
    name: 'James Patterson',
    email: 'james@example.com',
    DOB: '1991-04-28'
  },
  {
    name: 'A.J. Finn',
    email: 'aj@example.com',
    DOB: '1986-01-11'
  },
  {
    name: 'C.J. Box',
    email: 'cj@example.com',
    DOB: '1987-02-22'
  },
  {
    name: 'Pam Jenoff',
    email: 'pam@example.com',
    DOB: '1978-09-21'
  },
  {
    name: 'Greg Iles',
    email: 'greg@example.com',
    DOB: '1979-03-29'
  },
  {
    name: 'Danielle Steel',
    email: 'danielle@example.com',
    DOB: '1970-07-15'
  },
  {
    name: 'Alex Michaelides',
    email: 'alex@example.com',
    DOB: '1982-06-16'
  },
  {
    name: 'Kate Quinn',
    email: 'kate@example.com',
    DOB: '1992-01-28'
  }
];

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  public authors: Authors[] = authors;

  constructor() { }

  ngOnInit() {
  }

  public searchByAuthor(author: string): void {
    this.searchEvent.emit(author);
  }

}
