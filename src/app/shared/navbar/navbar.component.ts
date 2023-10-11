import { Component, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuListModel, menuConfig } from 'src/app/_model/menu-list/menu-list.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() isNavWhite!: boolean;
  public subscription: Array<Subscription> = [];
  public isAnnounce = sessionStorage.getItem('isAnnounce') ? (+(sessionStorage.getItem('isAnnounce') as string) === 0 ? false : true) : false;
  public isScrolled = false;
  public menuList: MenuListModel[] = menuConfig;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    if (!sessionStorage.getItem('isAnnounce')) {
      sessionStorage.setItem('isAnnounce', '1');
      this.isAnnounce = true;
    }
  }
  onCloseIcon(): void {
    this.isAnnounce = false;
    sessionStorage.setItem('isAnnounce', '0');
  }
  toggleHemburge(): void {
    const ishemburg = (document.getElementById('hemburg-box') as HTMLElement);
    if (ishemburg && ishemburg.getAttribute('aria-expanded') === 'true') {
      ishemburg.click();
    }
  }
  goToUdesk(): void {
    window.open('https://app.userstudy.co/', "_blank");
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    this.isScrolled = scrollPosition > 500 ? true : false;
  }
  @HostListener('window:resize', [])
  onWindowResize() {
    this.toggleHemburge();
  }
}
