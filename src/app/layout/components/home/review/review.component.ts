import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ReviewList } from 'src/app/_model';
import Swiper from 'swiper';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() reviewList: Array<ReviewList> = [];
  public reviewSwiper: Swiper = new Swiper('.reviewSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  });
  constructor() { }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.reviewSwiper.init();
    }, 500)
  }
  ngOnDestroy(): void {
    if (this.reviewSwiper) {
      this.reviewSwiper.destroy();
    }
  }

}
