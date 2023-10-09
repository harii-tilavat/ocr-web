import { Component, Input, OnInit } from '@angular/core';
import { BlogDetailResponseModel } from 'src/app/_model';

@Component({
  selector: 'app-selected-blog',
  templateUrl: './selected-blog.component.html',
  styleUrls: ['./selected-blog.component.scss']
})
export class SelectedBlogComponent implements OnInit {
  @Input() selectedBlog!: BlogDetailResponseModel;
  @Input() cardClass!: string;
  constructor() { }
  ngOnInit(): void {
  }

}
