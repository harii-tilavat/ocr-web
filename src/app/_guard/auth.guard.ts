import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from 'src/package/jwt-token';

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
      // debugger;
      return true
    } else {
      this.authService.isLoggedInSubject.next(false);
      return this.router.createUrlTree(['/auth']);
      // return false
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
    this.authService.isLoggedInSubject.next(false);
    return false;
  }
}
