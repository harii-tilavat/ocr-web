import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public isAdmin = false;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/home']);
    }
  }
  logout(): void {
    this.authService.logout();
  }
}
