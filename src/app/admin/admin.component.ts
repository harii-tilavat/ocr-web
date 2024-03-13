import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserProfileModel } from '../_model';
import { MenuListModel } from '../_model/menu-list/menu-list.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public isAdmin = false;
  public userata!: UserProfileModel;
  public profileMenuList: MenuListModel[] = [
    {
      id: 1,
      title: 'My profile',
      icon: 'bx bx-user',
      routing: ['/user', 'profile'],
      subMenu: [],
      enum: 'MY_PROFILE'
    },
    {
      id: 2,
      title: 'Setting',
      icon: 'bx bx-cog',
      routing: ['/user', 'account-setting'],
      subMenu: [],
      enum: 'SETTING'
    },
  ]
  constructor(private authService: AuthService, private toastrService: ToastrService, private router: Router) { }
  ngOnInit(): void {
    // if (!this.authService.isUserLoggedIn()) {
    //   this.router.navigate(['/home']);
    // }
    this.userata = this.authService.getUserData();
  }
  logout(): void {
    this.authService.logout();
  }
}
