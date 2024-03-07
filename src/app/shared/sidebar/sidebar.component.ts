import { Component, OnInit } from '@angular/core';
import { MenuListModel } from 'src/app/_model/menu-list/menu-list.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public themeColor = '#5e35b1';
  public menuList: Array<MenuListModel> = [
    {
      id: 1,
      title: 'Dashboard',
      routing: ['dashboard'],
      icon: 'bx bx-home-circle',
      subMenu: []
    },
    {
      id: 2,
      title: 'Documents',
      routing: ['docs'],
      icon: 'bx bx-file',
      subMenu: []
    },
    {
      id: 3,
      title: 'Upload document',
      routing: ['upload'],
      icon: 'bx bx-cloud-upload',
      subMenu: []
    },
    {
      id: 3,
      title: 'Wallet',
      routing: ['wallet'],
      icon: 'bx bx-dollar me-2',
      subMenu: []
    },
    {
      id: 2,
      title: 'My account',
      routing: ['profile'],
      icon: 'bx bx-user',
      subMenu: []
    },
    {
      id: 2,
      title: 'Bin',
      routing: ['bin'],
      icon: 'bx bx-user',
      subMenu: []
    },
    {
      id: 2,
      title: 'Setting',
      routing: ['account-setting'],
      icon: 'bx bx-cog',
      subMenu: []
    },
  ]
  constructor() { }
  ngOnInit(): void {
  }

}
