import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserProfileModel } from 'src/app/_model';
import { DecodedToken, JwtHelperService, JwtModel } from 'src/package/jwt-token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public jwtToken = new JwtModel();
  public isLoggedIn = false;
  public user: DecodedToken | null = new DecodedToken();
  public helper = new JwtHelperService();
  public redirectUrl!: string;
  public currentUserSubject: BehaviorSubject<DecodedToken | null> = new BehaviorSubject(this.user);
  public isLoggedInSubject: Subject<boolean> = new BehaviorSubject(false);
  constructor(private jwtHelper: JwtHelperService, private router: Router) { }
  get token() {
    return localStorage.getItem('token') as string || null;
  }
  set setToken(token: string) {
    localStorage.setItem('token', token);
  }
  login(token: string): Promise<DecodedToken | null> {
    return new Promise((resolve, reject) => {
      try {
        console.log("JWT == >> ", this.jwtToken);
        this.jwtToken.decodedToken = this.jwtHelper.decodeToken(token);
        this.jwtToken.isExpired = this.jwtHelper.isTokenExpired(token);
        if (!this.jwtToken.isExpired) {
          this.isLoggedIn = true;
          this.isLoggedInSubject.next(true);
          this.user = this.jwtToken.decodedToken;
          this.setToken = token;
          this.currentUserSubject.next(this.user);
          this.redirectUrl = '/user';
          this.router.navigate([this.redirectUrl]);
          return resolve(this.user);
        } else {
          this.isLoggedIn = false;
          return reject('Error');
        }
      } catch (error) {
        return reject(error);
      }
    })
  }
  // isUserLoggedIn(): boolean {
  //   return this.helper.isTokenExpired();
  // }
  isUserLoggedIn(): boolean {
    if (this.token) {
      const decodedToken = this.jwtHelper.decodeToken(this.token);
      if (decodedToken && decodedToken.type === 'USER') {
        return true;
      } else {
        return false
      }
    } else {
      return false
    }
  }
  getUserData(): any {
    if (this.token) {
      const decodedToken = this.jwtHelper.decodeToken(this.token);
      return decodedToken;
    } else {
      return null
    }
  }
  logout(): void {
    localStorage.clear();
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/auth']);
  }
}
