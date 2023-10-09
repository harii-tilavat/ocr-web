import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResourceTypeEnum } from 'src/app/_enum';
import { MoreStoryModel } from 'src/app/_model';

@Component({
  selector: 'app-more-stories',
  templateUrl: './more-stories.component.html',
  styleUrls: ['./more-stories.component.scss']
})
export class MoreStoriesComponent implements OnInit {
  @Input() moreStories!: MoreStoryModel;
  @Input() type: ResourceTypeEnum = ResourceTypeEnum.BLOG;

  @Output() sellAllList: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // console.log("Data: ", this.type,this.moreStories);
  }

}
