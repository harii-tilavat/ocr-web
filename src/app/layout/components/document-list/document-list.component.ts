import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { DocumentModel } from 'src/app/_model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  @Input() isArchivedList = false;
  public searchQuery = '';
  public searchForm: FormGroup = new FormGroup({ query: new FormControl('', []) });
  public isLoading = false;
  public documentList: Array<DocumentModel> = [];
  // public pagination
  constructor() { }
  ngOnInit(): void {
    console.log("recycle => ", this.isArchivedList);
    // this.searchLoading.emit(true);
    this.searchForm.controls['query'].valueChanges.pipe(tap(() => this.isLoading = true), debounceTime(1000), distinctUntilChanged())
      .subscribe((res) => {
        this.searchQuery = res;
        this.isLoading = false;
      })
  }
  getDocuments(event: Array<DocumentModel>): void {
    this.documentList = event;
    // this.displayDocuments = this.documentList.slice(0, 3);
  }
  ngOnDestroy(): void {
    this.searchForm.reset();
  }
}
