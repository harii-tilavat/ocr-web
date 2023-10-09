import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceTypeEnum } from 'src/app/_enum';
import { BlogDetailResponseModel } from 'src/app/_model';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss']
})
export class ResourceCardComponent implements OnInit {
  @Input() cardClass!: string;
  @Input() cardData!: BlogDetailResponseModel;
  @Input() type: ResourceTypeEnum = ResourceTypeEnum.RESOURCE;

  public resourceTypeEnum = ResourceTypeEnum;
  public staticDate: Date = new Date();
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  goToBlogResource(): void {
    if (this.type === this.resourceTypeEnum.BLOG) {
      this.router.navigate(['/blog', this.cardData.id]);
    } else {
      this.router.navigate(['/resources', this.cardData.id]);
    }
  }
}
