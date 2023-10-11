
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliderList: Array<any> = [];
  @Input() sliderClass = 'ngt-slider';
  @Input() initClass = '';
  @Input() swiperdlr = 0;
  public mySwiper!: Swiper;
  constructor() {

  }
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.' + this.initClass, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets'
      },
      // autoplay: {
      //   delay: 5000
      // },
    });
    this.mySwiper.init();

  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.mySwiper.destroy();
  }
}
