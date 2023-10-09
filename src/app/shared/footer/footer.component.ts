import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuListModel } from 'src/app/_model/menu-list/menu-list.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];
  public year=new Date().getFullYear();
  public menuList: MenuListModel[] = [
    {
      id: 1,
      title: 'Teams',
      icon: null,
      routing: ['/teams','managers'],
      subMenu: [
        {
          id: 1,
          icon: 'icon-pm',
          title: 'Product Managers',
          desc: 'Uncovering the “Why” behind user behaviour',
          link: 'managers'
        },
        {
          id: 2,
          icon: 'icon-pd',
          title: 'Product Designers',
          desc: 'Empowering design decisions with user-centric research',
          link: 'designers'
        },
        {
          id: 3,
          icon: 'icon-marketer',
          title: 'Marketers',
          desc: 'Connecting with audiences through informed understanding',
          link: 'marketers'
        },
        {
          id: 4,
          icon: 'icon-uxr',
          title: 'UX researchers',
          desc: 'Unlocking user behaviour to power better decision making',
          link: 'researchers'
        },
        {
          id: 5,
          icon: 'icon-founder',
          title: 'Founders',
          desc: 'Driving business success with user-focused strategies',
          link: 'founders'
        },
      ]
    },
    {
      id: 2,
      title: 'Pricing',
      icon: null,
      routing: '/pricing',
      subMenu: []
    },
    {
      id: 3,
      title: 'About',
      icon: null,
      routing: '/about',
      subMenu: []
    },

    {
      id: 5,
      title: 'Resources',
      icon: null,
      routing: ['/resources'],
      subMenu: [
        {
          id: 1,
          icon: 'icon-pm',
          title: 'Product Managers',
          desc: 'Uncovering the “Why” behind user behaviour',
          link: 'managers'
        },
        {
          id: 2,
          icon: 'icon-pd',
          title: 'Product Designers',
          desc: 'Empowering design decisions with user-centric research',
          link: 'designers'
        },
        {
          id: 3,
          icon: 'icon-marketer',
          title: 'Marketers',
          desc: 'Connecting with audiences through informed understanding',
          link: 'marketers'
        },
        {
          id: 4,
          icon: 'icon-uxr',
          title: 'UX researchers',
          desc: 'Unlocking user behaviour to power better decision making',
          link: 'researchers'
        },
        {
          id: 5,
          icon: 'icon-founder',
          title: 'Founders',
          desc: 'Driving business success with user-focused strategies',
          link: 'founders'
        },
      ]
    },
    {
      id: 4,
      title: 'Careers',
      icon: null,
      routing: '/about',
      subMenu:[]
    },
    {
      id: 6,
      title: 'Contact',
      icon: null,
      routing: '/contact',
      subMenu: []
    },
  ]
  constructor() {

  }
  ngOnInit(): void {
    // console.log("Year: ", this.year);
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
