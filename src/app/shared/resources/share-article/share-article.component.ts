import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-article',
  templateUrl: './share-article.component.html',
  styleUrls: ['./share-article.component.scss']
})
export class ShareArticleComponent implements OnInit {
  public hoverIndex: any = null;
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
  constructor() { }
  ngOnInit(): void {
    // const headerHeight = (document.getElementById('top-header') as HTMLElement).offsetHeight;
    // console.log("Header Height: ", headerHeight);
  }
  mouseEnter(index: number): void {
    this.hoverIndex = index;
  }
  mouseLeave(): void {
    this.hoverIndex = null;
  }
}
