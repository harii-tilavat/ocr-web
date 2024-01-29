import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OcrIntercepterService implements HttpInterceptor {
  public headerName = 'Authorization';
  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    return from(this.handleAccess(req, next));
  }
  handleAccess(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.token;
    if (token) {
      req = req.clone({ setHeaders: { [this.headerName]: token } });
    }
    return next.handle(req);
  }
}
