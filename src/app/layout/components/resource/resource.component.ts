import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResourceTypeEnum } from 'src/app/_enum';
import { BlogDetailResponseModel, BlogListResponseModel, GenericResponseList, ResourceDataModel } from 'src/app/_model';
import { PaginatorState } from 'src/app/_model/paginator.model';
import { NuggetService } from 'src/app/_services';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];
  public resourceData: ResourceDataModel = {
    blogHeader: {
      title: 'Meet our Customers',
      desc: 'How our customers improve product experience, boost conversion, reduce churn and more by leveraging the power of deeper human insights.',
      isSearchable: true
    },
    blogList: [],
    moreStories: {
      title: 'Resources from the blog',
      action: true,
      class: 'image-card',
      storyModelList: []
    }
  }
  public resourceList: Array<BlogDetailResponseModel> = [];
  public requestModel: { [key: string]: string | number | null } = { page: 1, pageSize: 10, querySearch: null };
  public paginator = new PaginatorState();

  public resourceTypeEnum = ResourceTypeEnum;
  constructor(public nuggetService: NuggetService, private router: Router) { }

  ngOnInit(): void {
    this.getAllResource();
  }
  getAllResource(): void {
    const request = { ...this.requestModel };
    this.subscription.push(this.nuggetService.getAllResourceList(request).subscribe({
      next: (res: GenericResponseList<BlogListResponseModel>) => {
        if (res.data && res.data.resourceList) {
          if (res.data.resourceList.length) {
            this.resourceList = this.resourceList.concat(res.data.resourceList);
          }
          this.paginator.page = res.data.page || 1;
          this.paginator.pageSize = res.data.pageSize || 10;
          this.paginator.total = res.data.count || 0;

          if (res.data.blogList) {
            this.resourceData.moreStories = { ...this.resourceData.moreStories, storyModelList: res.data.blogList };
          }
        } else {
          this.resourceList = [];
        }
      }, error: () => {
      }
    }))
  }
  searchQuery(item: string): void {
    this.resourceList = [];
    this.requestModel = { ...this.requestModel, querySearch: item, page: 1, pageSize: 10 };
    this.getAllResource();
  }
  paginate(item: PaginatorState): void {
    this.paginator = item;
    this.requestModel = { ...this.requestModel, page: this.paginator.page, pageSize: this.paginator.pageSize };
    this.getAllResource();
  }
  goToBlogList(): void {
    this.router.navigate(['/blog']);
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
