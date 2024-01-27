import { DecodedToken } from './jwt.model';
import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { JwtHelperService } from './jwthelper.service';
import { JWT_OPTIONS } from './jwtoptions.token';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';
import { mergeMap, retry, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  tokenGetter: () => any;
  headerName: string;
  authScheme: string;
  whitelistedDomains: Array<string | RegExp> = [];
  blacklistedRoutes: Array<string | RegExp> = [];
  throwNoTokenError: boolean;
  skipWhenExpired: boolean;
  userId: string;

  constructor(@Inject(JWT_OPTIONS) config: any, public jwtHelper: JwtHelperService, public toastrService: ToastrService, private router: Router) {
    this.tokenGetter = config.tokenGetter;
    this.headerName = 'Authorization';
    this.authScheme = config.authScheme || config.authScheme === '' ? config.authScheme : 'Bearer ';
    this.whitelistedDomains = config.whitelistedDomains || [];
    this.blacklistedRoutes = config.blacklistedRoutes || [];
    this.throwNoTokenError = config.throwNoTokenError || false;
    this.skipWhenExpired = config.skipWhenExpired;
    this.userId = 'user_id';
  }

  isWhitelistedDomain(request: HttpRequest<any>): boolean {
    const requestUrl: any = request.url;
    return (requestUrl.host === null || this.whitelistedDomains.findIndex(domain => typeof domain === 'string' ? domain === requestUrl.host : domain instanceof RegExp ? domain.test(requestUrl.host) : false) > -1);
  }

  isBlacklistedRoute(request: HttpRequest<any>): boolean {
    const url = request.url;
    return (this.blacklistedRoutes.findIndex(route => typeof route === 'string' ? route === url : route instanceof RegExp ? route.test(url) : false) > -1);
  }

  handleInterception(token: string | null, request: HttpRequest<any>, next: HttpHandler) {
    if (!token && this.throwNoTokenError) {
      throw new Error('Could not get token from tokenGetter function.');
    }
    if (token) {
      if (!this.jwtHelper.isTokenExpired(token)) {
        request = request.clone({ reportProgress: true });
      } else if (this.jwtHelper.isTokenExpired(token)) {
        this.toastrService.error('Session Expired', 'Please Login again!');
        localStorage.clear();
        this.router.navigate(['/login']);
        return;
      }
    } else if (request.url.includes('/api/tokenlogin')) {
      request = request.clone({
        reportProgress: true,
        setHeaders: {
          ['Accept']: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          ['Content-Type']: 'application/x-www-form-urlencoded'
        }
      });
    } else {
      request = request.clone({ reportProgress: true });
    }
    return next.handle(request);
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  }


}
