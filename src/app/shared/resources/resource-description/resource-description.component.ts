import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-description',
  templateUrl: './resource-description.component.html',
  styleUrls: ['./resource-description.component.scss']
})
export class ResourceDescriptionComponent implements OnInit {
  // @Input() blogContent:BlogDescriptionModel[]=[];
  @Input() blogContent!: any;
  public blogContentHtml = '';
  constructor() { }
  ngOnInit(): void {
    // console.log("Content: ", this.blogContent);
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.blogContentHtml = reader.result as string;
    // };
    // reader.readAsText(this.blogContent);
  }

}
