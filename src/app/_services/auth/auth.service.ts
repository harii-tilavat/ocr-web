import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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
          this.user = this.jwtToken.decodedToken;
          this.setToken = token;
          this.currentUserSubject.next(this.user);
          this.redirectUrl = '/';
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
  isUserLoggedIn(): boolean {
    return this.helper.isTokenExpired();
  }
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
