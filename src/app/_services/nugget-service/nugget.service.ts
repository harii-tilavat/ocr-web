/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseProviderService } from '../base-provider.service';
import { environment } from './../../../environments/environment';
import { map, Observable } from 'rxjs';
import { GenericResponseList, GenericResponseType } from 'src/app/_model';
@Injectable({
  providedIn: 'root'
})
export class NuggetService extends BaseProviderService {

  constructor(http: HttpClient) {
    super(http);
  }
  getAllBlogList(searchParam: any): Observable<any> {
    let url = `${environment.baseUrl}/blog?`;
    if (searchParam) {
      for (const key in searchParam) {
        if (searchParam[key] !== undefined && searchParam[key] !== null && searchParam[key] !== '') {
          url = url + key + '=' + encodeURIComponent(searchParam[key]) + '&';
        }
      }
    }
    if (url.endsWith('&')) {
      url = url.slice(0, -1);
    }
    return this.makeGetCall(url).pipe(map(res => res));
  }
  getBlogBtId(itemId: string): Observable<any> {
    return this.makeGetCall(environment.baseUrl + '/blog/' + itemId).pipe(map(res => res));
  }
  getAllResourceList(searchParam: any): Observable<any> {
    let url = `${environment.baseUrl}/customer?`;
    if (searchParam) {
      for (const key in searchParam) {
        if (searchParam[key] !== undefined && searchParam[key] !== null && searchParam[key] !== '') {
          url = url + key + '=' + encodeURIComponent(searchParam[key]) + '&';
        }
      }
    }
    if (url.endsWith('&')) {
      url = url.slice(0, -1);
    }
    return this.makeGetCall(url).pipe(map(res => res));
  }
  getBlobContext(requestUrl: string): Observable<Blob> {
    return this.makeGetFile(requestUrl, 'blob').pipe(map((res) => res)) as Observable<Blob>;
  }

  // formal-enquiry
  // NewsLetter
  createNewsLetter(request: any): Observable<any> {
    return this.makePostCall(environment.baseUrl + '/news-letters', request).pipe(map((res) => res));
  }
}
