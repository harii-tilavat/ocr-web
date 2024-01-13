import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OcrIntercepterService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    if (req.url.includes(environment.apiUrl)) {
      req = req.clone({
        setHeaders: {
          'Accept': 'application/json',
          'CLIENT-ID': 'vrfnyNiV2hYKLiMuT7NTpxLCVrXPgt9YCJWs6tl',
          'Authorization': 'apikey jerryff81:57f6f447615b5c8d2cb9eb4107a0d572'
        },
      })
      return next.handle(req);
    }
    return next.handle(req);
  }
}
