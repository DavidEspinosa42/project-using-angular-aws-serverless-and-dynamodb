import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() searchAuthor: string;
  @Output() searchEvent = new EventEmitter<string>();
  public searchValue: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // Clean search by title when an Author name is clicked
    if (changes.searchAuthor && !changes.searchAuthor.isFirstChange()) {
      this.searchValue = '';
    }
  }

  public searchByTitle(): void {
    this.searchEvent.emit(this.searchValue);
  }

  public clearSearch(): void {
    this.searchValue = '';
    this.searchEvent.emit(this.searchValue);
  }

}
