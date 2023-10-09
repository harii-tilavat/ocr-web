import { Component, Input, OnInit } from '@angular/core';
import { ReviewList } from 'src/app/_model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() reviewList: Array<ReviewList> = [];
  constructor() { }
  ngOnInit(): void {
  }

}
