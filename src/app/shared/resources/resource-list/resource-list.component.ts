import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ResourceTypeEnum } from 'src/app/_enum';
import { BlogDetailResponseModel } from 'src/app/_model';
import { PaginatorState } from 'src/app/_model/paginator.model';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit, OnDestroy {
  @Input() blogDetails: Array<BlogDetailResponseModel> = [];
  @Input() cardClass!: string;
  @Input() title!: string;
  @Input() paginator = new PaginatorState();
  @Input() type: ResourceTypeEnum = ResourceTypeEnum.BLOG;

  @Output() pageChange = new EventEmitter<PaginatorState>(true);
  constructor() { }
  ngOnInit(): void {
  }
  nextPageLoad(): void {
    this.paginator.page = this.paginator.page + 1
    this.pageChange.emit(this.paginator);
  }
  ngOnDestroy(): void {
  }
}
