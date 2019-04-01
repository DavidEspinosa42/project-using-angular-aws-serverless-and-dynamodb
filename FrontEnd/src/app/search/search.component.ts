import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  public searchValue: string;

  constructor() { }

  ngOnInit() {
  }

  public searchByTitle(): void {
    this.searchEvent.emit(this.searchValue);
  }

  public clearSearch(): void {
    this.searchValue = '';
    this.searchEvent.emit(this.searchValue);
  }

}
