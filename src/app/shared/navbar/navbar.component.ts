import { Component, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuListModel } from 'src/app/_model/menu-list/menu-list.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() isNavWhite!: boolean;
  public subscription: Array<Subscription> = [];
  public isAnnounce = true;
  public isScrolled = false;
  public menuList: MenuListModel[] = [
    {
      id: 1,
      title: 'Teams',
      icon: null,
      routing: '/teams',
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
      title: 'Resources',
      icon: null,
      routing: '/',
      subMenu: [
        {
          id: 1,
          icon: 'blog',
          title: 'Blog',
          desc: 'Best practices and news on user research and insight',
          link: 'blog'
        },
        {
          id: 2,
          icon: 'customer-story',
          title: 'Customer stories',
          desc: 'How our customers succesfully leverage Nugget',
          link: 'resources'
        }
      ]
    },
    {
      id: 3,
      title: 'About',
      icon: null,
      routing: '/about',
      subMenu: []
    },
    {
      id: 4,
      title: 'Contact',
      icon: null,
      routing: '/contact',
      subMenu: []
    },
    {
      id: 5,
      title: 'Pricing',
      icon: null,
      routing: '/pricing',
      subMenu: []
    },
  ]
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
  }
  onCloseIcon(): void {
    this.isAnnounce = false;
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    this.isScrolled = scrollPosition > 500 ? true : false;
  }
}
