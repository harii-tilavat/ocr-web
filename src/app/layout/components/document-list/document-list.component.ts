import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  public searchQuery = '';
  public searchForm: FormGroup = new FormGroup({ query: new FormControl('', []) });
  public isLoading = false;
  constructor() { }
  ngOnInit(): void {
    // this.searchLoading.emit(true);
    this.searchForm.controls['query'].valueChanges.pipe(tap(() => this.isLoading = true), debounceTime(1000), distinctUntilChanged())
      .subscribe((res) => {
        this.searchQuery = res;
        this.isLoading = false;
      })
  }

  ngOnDestroy(): void {
    this.searchForm.reset();
  }
}
