import { Component, Input, OnInit } from '@angular/core';
import { MenuListModel, sidebarMenuConfig } from 'src/app/_model/menu-list/menu-list.model';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuList: Array<MenuListModel> = sidebarMenuConfig;
  @Input() isAdmin = false;
  public themeColor = '#5e35b1';
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  onRouting(enumValue: string): void {
    if (enumValue && enumValue === 'LOGOUT') {
      this.authService.logout();
    }
  }
  hidemenu(): void {
    document.getElementsByTagName('html')[0].classList.remove('layout-menu-expanded');
  }
}
