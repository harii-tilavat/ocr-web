import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { UserProfileModel } from 'src/app/_model';
import { FileUploadService } from '../file-upload/file-upload.service';

@Injectable({
  providedIn: 'root'
})
export class OcrIntercepterService implements HttpInterceptor {
  public headerName = 'Authorization';
  constructor(private authService: AuthService, private fileUploadService: FileUploadService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    return from(this.handleAccess(req, next));
  }
  handleAccess(req: HttpRequest<any>, next: HttpHandler) {
    // let url = req.url;
    const token = this.authService.token;
    // const userdata: UserProfileModel = this.authService.getUserData();
    // if (userdata && userdata.id) {
    //   url = url + '?';
    //   url = this.fileUploadService.makeQueryparamUrl(url, { user_id: userdata.id });
    // }
    // console.log("URL => ", url);
    if (token) {
      req = req.clone({ setHeaders: { [this.headerName]: token } });
    }
    return next.handle(req);
  }
}
