import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string | null;
  constructor(private jwthelper: JwtHelperService) { }
  login(token: string) {
    this.setToken(token);
    console.log("Hello World");
    const newToken = this.jwthelper.tokenGetter();
    console.log("TOKEN ==>>", newToken);
    console.log("DECODED TOKEN ==>> ", this.jwthelper.decodeToken());

    console.log("DATE ", this.jwthelper.getTokenExpirationDate());
    // console.log("DATE ", this.jwthelper.);
    console.log("IS expired ? ", this.jwthelper.isTokenExpired());

    // this.jwthelper.tokenGetter()
  }
  setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }
  getToken(): string | null {
    this.token = localStorage.getItem('token');
    return this.token;
  }
}
