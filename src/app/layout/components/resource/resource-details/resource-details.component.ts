import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResourceTypeEnum } from 'src/app/_enum';
import { BlogDetailResponseModel, BlogHeadingModel, GenericResponseList, MoreStoryModel, ResourceResponseModel } from 'src/app/_model';
import { NuggetService } from 'src/app/_services';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss']
})
export class ResourceDetailsComponent implements OnInit {
  public resourceHeading: BlogHeadingModel = {
    id: 1,
    title: null,
    image: null,
    sub_title: null,
    metadata: []
  }
  public moreStories: MoreStoryModel = {
    title: 'More customer stories',
    action: false,
    class: 'more-story-card bg-purple',
    storyModelList: []
  }
  public resourceId!: string;
  public subscription: Array<Subscription> = [];
  public resourceTypeEnum = ResourceTypeEnum;
  public resourceDetails: BlogDetailResponseModel = new BlogDetailResponseModel();
  constructor(private nuggetService: NuggetService, private route: ActivatedRoute, private router: Router) {
    if (this.route.snapshot.paramMap.get('id')) {
      this.resourceId = this.route.snapshot.paramMap.get('id') as string;
    }
    this.subscription.push(this.route.params.subscribe((res: Params) => {
      if (res && res['id']) {
        this.resourceId = res['id'];
        this.getResourceDetailsFromId();
      }
    }));
  }
  ngOnInit(): void {
    if (this.resourceId) {
      this.getResourceDetailsFromId();
    }
  }
  getResourceDetailsFromId(): void {
    this.subscription.push(
      this.nuggetService.getResourceById(this.resourceId).subscribe({
        next: (res: GenericResponseList<ResourceResponseModel>) => {
          if (res && res.data) {
            if (res.data.resourceDetails) {
              this.resourceDetails = res.data.resourceDetails;
              this.resourceHeading = { ...this.resourceHeading, title: this.resourceDetails.title, sub_title: this.resourceDetails.sub_title, image: this.resourceDetails.poster_image, metadata: this.resourceDetails.metadata };
            }
            if (res.data.relatedArtical) {
              this.moreStories = { ...this.moreStories, storyModelList: res.data.relatedArtical };
            }
          }
        }, error: (ex) => {
          console.log(ex);
        }
      })
    )
  }
}
