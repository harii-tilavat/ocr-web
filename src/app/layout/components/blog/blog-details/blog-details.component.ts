import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ResourceTypeEnum } from 'src/app/_enum';
import { BlogDetailResponseModel, BlogHeadingModel, BlogResponseModel, GenericResponseList, MoreStoryModel } from 'src/app/_model';
import { NuggetService } from 'src/app/_services';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  public blogHeading: BlogHeadingModel = {
    id: 1,
    title: null,
    sub_title: null,
    image: null,
    metadata: []
  }
  public moreStories: MoreStoryModel =
    {
      title: 'Related Articles',
      action: false,
      class: 'image-card',
      storyModelList: []
    };
  public subscription: Array<Subscription> = [];
  public blogDetails: BlogDetailResponseModel = new BlogDetailResponseModel();
  public resourceTypeEnum = ResourceTypeEnum;
  public blogId!: string;
  constructor(private nuggetService: NuggetService, private route: ActivatedRoute, private router: Router) {
    // if (this.route.snapshot.paramMap.get('id')) {
    //   this.blogId = this.route.snapshot.paramMap.get('id') as string;

    // }
    this.subscription.push(this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(() => {
      return this.route.snapshot.paramMap.get('id');
    })).subscribe((res: string | null) => {
      this.blogId = res as string;
      if (this.blogId) {
        this.getBlogDetailsFromId();
      }
    }));
  }
  ngOnInit(): void {
    // if (this.blogId) {
    //   this.getBlogDetailsFromId();
    // }
  }

  getBlogDetailsFromId(): void {
    this.subscription.push(
      this.nuggetService.getBlogBtId(this.blogId).subscribe({
        next: (res: GenericResponseList<BlogResponseModel>) => {
          if (res && res.data) {
            if (res.data.blogDetails) {
              this.blogDetails = res.data.blogDetails;
              this.blogHeading = { ...this.blogHeading, title: this.blogDetails.title, sub_title: this.blogDetails.sub_title, image: this.blogDetails.poster_image };
            }
            if (res.data.relatedArtical) {
              this.moreStories = { ...this.moreStories, storyModelList: res.data.relatedArtical }
            }
          }
        }, error: (ex) => {
          console.log(ex);
        }
      })
    )
  }
}
