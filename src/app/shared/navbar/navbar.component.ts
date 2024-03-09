import { Component, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuListModel, menuConfig } from 'src/app/_model/menu-list/menu-list.model';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() themeColor = '#b42318';
  @Input() isNavWhite!: boolean;
  @Input() isLoggedIn = false;
  public subscription: Array<Subscription> = [];
  public isAnnounce = sessionStorage.getItem('isAnnounce') ? (+(sessionStorage.getItem('isAnnounce') as string) === 0 ? false : true) : false;
  public isScrolled = false;
  public isOpen = false;
  public menuList: MenuListModel[] = menuConfig;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.authService.isLoggedInSubject.subscribe({
      next: (res: boolean) => {
      }
    })
    console.log("Check login => ", this.authService.isUserLoggedIn());
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
  userLogout():void{
    this.authService.logout();
  }
  goToLogin(): void {
    this.router.navigate(['auth', 'login']);
  }
  goToSignup(): void {
    this.router.navigate(['auth', 'signup']);
  }
}
