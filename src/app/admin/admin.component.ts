import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserProfileModel } from '../_model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public isAdmin = false;
  public userata!: UserProfileModel;
  constructor(private authService: AuthService, private router: Router, private toastrService: ToastrService) { }
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
