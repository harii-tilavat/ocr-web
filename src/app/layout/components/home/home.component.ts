import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeaturedModel, GenericResponseList, ProductDetailModel, ReviewList } from 'src/app/_model';
import { TeamsOfShapesModel } from 'src/app/_model';
import { NuggetService } from 'src/app/_services';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  public subscription: Array<Subscription> = [];
  public logoSwiper = new Swiper('.logoSwiper', {
    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 24
      },
      775: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 5,
        spaceBetween: 20
      },
    },
    spaceBetween: 20,
    loop: true,
    speed: 4000,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   type: 'bullets'
    // },
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },
    allowTouchMove: false,
  });
  public reviewSwiper = new Swiper('.reviewSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  });
  public isToggleFaster = true;
  public logoList = [
    {
      id: 1,
      title: 'logo image 1',
      icon: '/assets/images/logos/jupiter.jpg'
    },
    {
      id: 2,
      title: 'logo image 2',
      icon: '/assets/images/logos/logo2.png'
    },
    {
      id: 3,
      title: 'logo image 3',
      icon: '/assets/images/logos/logo3.png'
    },
    {
      id: 4,
      title: 'logo image 4',
      icon: '/assets/images/logos/logo4.png'
    },
    {
      id: 5,
      title: 'logo image 5',
      icon: '/assets/images/logos/logo5.png'
    },
    {
      id: 1,
      title: 'logo image 1',
      icon: '/assets/images/logos/jupiter.jpg'
    },
    {
      id: 2,
      title: 'logo image 2',
      icon: '/assets/images/logos/logo2.png'
    },
    {
      id: 3,
      title: 'logo image 3',
      icon: '/assets/images/logos/logo3.png'
    },
    {
      id: 4,
      title: 'logo image 4',
      icon: '/assets/images/logos/logo4.png'
    },
    {
      id: 5,
      title: 'logo image 5',
      icon: '/assets/images/logos/logo5.png'
    },
  ];
  public featuredList: FeaturedModel[] = [
    {
      id: 1,
      icon: 'product-hunt',
      desc: '“This is a great way to collect feedback, as you actually get to hear users opinions!”',
    },
    {
      id: 2,
      icon: 'entrepreneur',
      desc: '“A SaaS startup that simplifies user research for product teams”',
    },
    {
      id: 1,
      icon: 'inc-42',
      desc: '“UserStudy makes user research 10x easier for product teams globally”',
    },
  ]
  public teamList: TeamsOfShapesModel[] = [
    {
      id: 1,
      icon: 'icon-pm',
      title: 'Product Managers',
      desc: 'Uncover the "why" behind user behaviour',
      link: ['/teams', 'managers']
    },
    {
      id: 2,
      icon: 'icon-pd',
      title: 'Product Designers',
      desc: 'Make design decisions powered by user insights',
      link: ['/teams', 'designers']
    },
    {
      id: 3,
      icon: 'icon-marketer',
      title: 'Marketers',
      desc: 'Connect with audiences through informed understanding',
      link: ['/teams', 'marketers']
    },
    {
      id: 4,
      icon: 'icon-uxr',
      title: 'UX researchers',
      desc: 'Unlock user behaviour to power better decision making',
      link: ['/teams', 'researchers']
    },
    {
      id: 5,
      icon: 'icon-founder',
      title: 'Founders',
      desc: 'Drive business success with user-focussed strategy',
      link: ['/teams', 'founders']
    },
  ]
  public productList: Array<{ subMenu: Array<ProductDetailModel> }> = [
    {
      subMenu: [
        {
          id: 1,
          title: 'Unmoderated testing',
          subTitle: 'Conduct qualitative research at speed of survey',
          desc: 'In depth user research wtith maximum scalability and minimum time',
          imagePath: 'conduct-qualitative-3.mp4',
          action: true,
          subMenu: []
        },
        {
          id: 2,
          title: 'Unmoderated testing',
          subTitle: 'Launch video based user research',
          desc: 'Post the study, get insights within hours and not weeks',
          imagePath: 'conduct-qualitative.png',
          action: true,
          subMenu: []
        }
      ]
    },
    {
      subMenu: [
        {
          id: 1,
          title: '1:1 interviews',
          subTitle: 'Participant friendly interview tool',
          desc: 'Non-intimidating experience for participants, while observers watch from behind the screen',
          imagePath: 'distraction-free.mp4',
          action: true,
          subMenu: []
        },
        {
          id: 2,
          title: '1:1 interviews',
          subTitle: 'Distraction free 1:1 interviews without switching apps',
          desc: 'Take live notes and see interview script on the same screen as the interview',
          imagePath: 'participent-friendly.webp',
          action: true,
          subMenu: []
        },
      ]
    },
    {
      subMenu: [
        {
          id: 1,
          title: 'Insight Hub',
          subTitle: 'Never lose an insight anymore',
          desc: 'Take time stamped notes and highlights, so that you never lose an insight',
          imagePath: 'never-lose.mp4',
          action: true,
          subMenu: []
        },
        {
          id: 2,
          title: 'Insight Hub',
          subTitle: 'Transcripts available at your disposal',
          desc: 'Quickly find the keywords or relevant sections using the transcripts',
          imagePath: 'transcription-available.webp',
          action: true,
          subMenu: []
        },
        {
          id: 3,
          title: 'Insight Hub',
          subTitle: 'Auto-summarisation of interviews instantly',
          desc: 'Understand pain points, delight points from the conversation',
          imagePath: 'auto-summarisation.webp',
          action: true,
          subMenu: []
        },
      ]
    },
    {
      subMenu: [
        {
          id: 1,
          title: 'participant panel',
          subTitle: 'Access our diverse database of 1 million+ participants',
          desc: 'Find your B2B or B2C participants with 30+ filters and screeners',
          imagePath: 'access-diverse-3.mp4',
          action: true,
          subMenu: []
        },
        {
          id: 2,
          title: 'participant panel',
          subTitle: 'No fake or repeat participants',
          desc: 'Screened and vetted participant panel with multi level checks',
          imagePath: 'no-fake-repeat.webp',
          action: true,
          subMenu: []
        }
      ]
    },
  ]
  public reviewList: Array<ReviewList> = [];

  constructor(private nuggetService: NuggetService) {
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.isToggleFaster = false;
    }, 1000);
    this.getReviewList();
  }
  getReviewList(): void {
    this.subscription.push(
      this.nuggetService.getReviewList().subscribe({
        next: (res: GenericResponseList<Array<ReviewList>>) => {
          if (res.data) {
            this.reviewList = res.data.sort((a: ReviewList, b: ReviewList) => a.company.localeCompare(b.company));
            setTimeout(() => {
              this.initReviewSwiper();
            }, 100)
          }
        }, error: () => {

        }
      })
    )
  }
  toggleFaster(): void {
    this.isToggleFaster = !this.isToggleFaster;
  }
  goToUdesk(): void {
    window.open('https://app.userstudy.co/', "_blank");
  }
  ngAfterViewInit(): void {
    // this.logoSwiper = new Swiper('.logoSwiper', {
    //   breakpoints: {
    //     300: {
    //       slidesPerView: 3,
    //       spaceBetween: 24
    //     },
    //     775: {
    //       slidesPerView: 4,
    //       spaceBetween: 30,
    //     },
    //     991: {
    //       slidesPerView: 4,
    //       spaceBetween: 30
    //     },
    //     1199: {
    //       slidesPerView: 5,
    //       spaceBetween: 20
    //     },
    //   },
    //   spaceBetween: 20,
    //   loop: true,
    //   speed: 3000,
    //   // pagination: {
    //   //   el: '.swiper-pagination',
    //   //   clickable: true,
    //   //   type: 'bullets'
    //   // },
    //   autoplay: {
    //     delay: 1,
    //     disableOnInteraction: false
    //   },
    //   allowTouchMove: false,
    // });
    this.logoSwiper.init();
  }
  initReviewSwiper(): void {
    this.reviewSwiper.init()
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
    if (this.reviewSwiper) {
      this.reviewSwiper.destroy();
    }
    if (this.logoSwiper) {
      this.logoSwiper.destroy();
    }
  }

}
