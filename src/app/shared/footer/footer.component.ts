import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuListModel, menuConfig } from 'src/app/_model/menu-list/menu-list.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];
  public year = new Date().getFullYear();
  public menuList: { title: string, routing: string }[] = [
    { title: 'About', routing: '/about' },
    { title: 'Contact', routing: '/contact' },
    { title: 'Pricing', routing: '/pricing' },
    { title: 'Blog', routing: '/blog' },
    { title: 'Customer stories', routing: '/resources' },

  ];
  constructor() {

  }
  ngOnInit(): void {
    // console.log("Year: ", this.year);
    // const list = menuConfig.filter(i => (i.id !== 1));
    // console.log(list);
  }
  goToUdesk(): void {
    window.open('https://app.userstudy.co/', "_blank");
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
