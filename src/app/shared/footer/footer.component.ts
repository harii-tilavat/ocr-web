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
  public menuList: MenuListModel[] = menuConfig;
  constructor() {

  }
  ngOnInit(): void {
    // console.log("Year: ", this.year);
  }
  goToUdesk(): void {
    window.open('https://app.userstudy.co/', "_blank");
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
