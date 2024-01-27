import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private jwtHelperService: JwtHelperService, private toastService: ToastrService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuth = this.checkLogin();
    if (isAuth) {
      return true;
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }
  checkLoginToken(): boolean {
    if (!this.jwtHelperService.isTokenExpired()) {
      return true;
    }
    return false;
  }
  checkLogin(): boolean {
    if (!this.jwtHelperService.isTokenExpired()) {
      return true;
    } else if (this.jwtHelperService.tokenGetter() && this.jwtHelperService.isTokenExpired()) {
      this.toastService.error('Session expired! ', 'Login again!');
      return false
    }
    return false;
  }
}
