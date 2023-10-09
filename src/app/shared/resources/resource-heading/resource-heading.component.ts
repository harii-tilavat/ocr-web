
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceTypeEnum } from 'src/app/_enum';
import { BlogHeadingModel } from 'src/app/_model';

@Component({
  selector: 'app-resource-heading',
  templateUrl: './resource-heading.component.html',
  styleUrls: ['./resource-heading.component.scss']
})
export class ResourceHeadingComponent implements OnInit {
  @Input() resourceHeading!: BlogHeadingModel;
  @Input() type!: ResourceTypeEnum;
  public resourceTypeEnum = ResourceTypeEnum;
  public hoverIndex: number | null = null;
  public iconList = [
    {
      id: 1,
      icon: 'linkedin'
    },
    {
      id: 2,
      icon: 'x'
    },
    {
      id: 2,
      icon: 'link'
    },
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    console.log("Heading:=====", this.resourceHeading);
  }
  goToResource(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  mouseEnter(index: number): void {
    this.hoverIndex = index;
  }
  mouseLeave(): void {
    this.hoverIndex = null;
  }
}
