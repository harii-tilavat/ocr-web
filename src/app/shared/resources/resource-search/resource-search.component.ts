import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription, tap, debounceTime, distinctUntilChanged } from 'rxjs';
import { ResourceTypeEnum } from 'src/app/_enum';

@Component({
  selector: 'app-resource-search',
  templateUrl: './resource-search.component.html',
  styleUrls: ['./resource-search.component.scss']
})
export class ResourceSearchComponent implements OnInit, OnDestroy {
  @Input() type: ResourceTypeEnum = ResourceTypeEnum.BLOG;
  @Input() blogHeader!: any;
  public searchForm: FormGroup = new FormGroup({ query: new FormControl('', []) });
  public subscription: Array<Subscription> = [];

  @Output() searchLoading: EventEmitter<boolean> = new EventEmitter();
  @Output() searchQuery: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.subscription.push(this.searchForm.controls['query'].valueChanges.pipe(tap(() => this.searchLoading.emit(true)), debounceTime(800), distinctUntilChanged())
      .subscribe(query => {
        this.searchQuery.emit(query);
      }));
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe);
  }
}
