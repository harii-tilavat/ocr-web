import { Component, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuListModel, menuConfig } from 'src/app/_model/menu-list/menu-list.model';
import { GoogleTagConfigService } from 'src/app/google-tag/google-tag-config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() isNavWhite!: boolean;
  @Input() isLoggedIn = false;
  public subscription: Array<Subscription> = [];
  public isAnnounce = sessionStorage.getItem('isAnnounce') ? (+(sessionStorage.getItem('isAnnounce') as string) === 0 ? false : true) : false;
  public isScrolled = false;
  public isOpen = false;
  public menuList: MenuListModel[] = menuConfig;
  constructor(private googleTagConfigService: GoogleTagConfigService, private router: Router) { }
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
  toggleButton(): void {
    this.isOpen = !this.isOpen;
  }
  goToUdesk(): void {
    this.googleTagConfigService.pushTag({ event: 'button-click', data: 'Nav bar try for free' });
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
  loginUser(): void {
    if (this.isLoggedIn && confirm('Are you sure to logout ?')) {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }
}
