import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserProfileModel } from '../_model';
import { MenuListModel, adminMenuConfig, sidebarMenuConfig } from '../_model/menu-list/menu-list.model';
import { NgbModal } from '../shared/ng-modal';
import { RatingComponent } from '../shared/basic/rating/rating.component';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public editor!: Editor;


  public year = new Date().getFullYear();
  public isAdmin = false;
  public unameIcon!: string;
  public userata!: UserProfileModel;
  public sidebarMenuConfig = sidebarMenuConfig;
  public adminMenuConfig = adminMenuConfig;
  public profileMenuList: MenuListModel[] = [
    {
      id: 1,
      title: 'My profile',
      icon: 'bx bx-user',
      // routing: ['/user', 'profile'],
      routing: ['account-setting'],
      subMenu: [],
      enum: 'MY_PROFILE'
    },
    {
      id: 2,
      title: 'Give us rating',
      icon: 'bx bx-wink-smile',
      routing: null,
      subMenu: [],
      enum: 'RATING'
    },
    {
      id: 3,
      title: 'Setting',
      icon: 'bx bx-cog',
      routing: ['account-setting'],
      subMenu: [],
      enum: 'SETTING'
    },
  ]
  constructor(private authService: AuthService, private toastrService: ToastrService, private router: Router, private modalService: NgbModal) { }
  ngOnInit(): void {
    // if (!this.authService.isUserLoggedIn()) {
    //   this.router.navigate(['/home']);
    // }
    this.editor = new Editor();
    console.log("IS ADMIN => ", this.authService.isAdmin());
    this.isAdmin = this.authService.isAdmin();
    this.userata = this.authService.getUserData();
    this.unameIcon = this.userata.lastname ? (this.userata.name.slice(0, 1) + this.userata.lastname.slice(0, 1)) : this.userata.name.slice(0, 1);
  }
  openMenu(): void {
    document.getElementsByTagName('html')[0].classList.add('layout-menu-expanded');
  }
  async giveRating(enumType: string): Promise<any> {
    if (enumType === 'RATING') {
      if (!this.modalService.hasOpenModals()) {
        const modalRef = this.modalService.open(RatingComponent, { size: 'md', centered: true });
      }
    }
  }
  logout(): void {
    this.authService.logout();
  }
}
