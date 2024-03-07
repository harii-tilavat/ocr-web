import { Component, OnInit } from '@angular/core';
import { MenuListModel, sidebarMenuConfig } from 'src/app/_model/menu-list/menu-list.model';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public themeColor = '#5e35b1';
  public menuList: Array<MenuListModel> = sidebarMenuConfig;
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  onRouting(enumValue: string): void {
    if (enumValue && enumValue === 'LOGOUT') {
      this.authService.logout();
    }
  }
}
