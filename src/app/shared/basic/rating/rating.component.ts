import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  public stars = Array(5).fill(false);
  public rated = false;
  public userRating = 0;

  constructor() { }
  ngOnInit(): void {

  }

  rateProject(rating: number): void {
    this.rated = true;
    this.userRating = rating;
  }

  hoverStar(index: number): void {
    if (!this.rated) {
      this.stars = this.stars.map((_, i) => i <= index);
    }
  }

  resetHover(): void {
    if (!this.rated) {
      this.stars = Array(5).fill(false);
    }
  }
}
