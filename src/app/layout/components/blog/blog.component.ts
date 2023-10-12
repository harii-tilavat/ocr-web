import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResourceTypeEnum } from 'src/app/_enum';
import { BlogDetailResponseModel, BlogListResponseModel, GenericResponseList, ResourceDataModel } from 'src/app/_model';
import { PaginatorState } from 'src/app/_model/paginator.model';
import { NuggetService } from 'src/app/_services';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public resourceData: ResourceDataModel = {
    blogHeader: {
      title: 'Blog for Curious',
      desc: 'Curated articles and guides to help you gain deeper, human insights, and build richer, human experiences.',
      isSearchable: true,
    },
    blogList: [],
    moreStories: {
      title: 'Customer stories',
      action: true,
      class: 'more-story-card',
      storyModelList: []
    }
  }
  public blogList: Array<BlogDetailResponseModel> = [];
  public subscription: Array<Subscription> = [];
  public requestModel: { [key: string]: string | number | null } = { page: 1, pageSize: 10, querySearch: null };
  public paginator = new PaginatorState();

  public resourceTypeEnum = ResourceTypeEnum;
  constructor(public nuggetService: NuggetService, private router: Router) { }
  ngOnInit(): void {
    this.getAllBlog();
  }
  getAllBlog(): void {
    const request = { ...this.requestModel };
    this.subscription.push(this.nuggetService.getAllBlogList(request).subscribe({
      next: (res: GenericResponseList<BlogListResponseModel>) => {
        if (res.data && res.data.blogList) {
          if (res.data.blogList.length) {
            this.blogList = this.blogList.concat(res.data.blogList);
          }
          this.paginator.page = res.data.page || 1;
          this.paginator.pageSize = res.data.pageSize || 10;
          this.paginator.total = res.data.count || 0;
          if (res.data.resourceList) {
            this.resourceData.moreStories = { ...this.resourceData.moreStories, storyModelList: res.data.resourceList };
          }
        } else {
          this.blogList = [];
        }
      }, error: (err: any) => {
      }
    }))
  }
  goToBlogList(): void {
    this.router.navigate(['/resources']);
  }
  searchQuery(item: string): void {
    this.blogList = [];
    this.requestModel = { ...this.requestModel, querySearch: item, page: 1, pageSize: 10 };
    this.getAllBlog();
  }
  paginate(item: PaginatorState): void {
    this.paginator = item;
    this.requestModel = { ...this.requestModel, page: this.paginator.page, pageSize: this.paginator.pageSize };
    this.getAllBlog();
  }

}
