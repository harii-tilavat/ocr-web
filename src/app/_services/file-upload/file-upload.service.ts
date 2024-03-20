import { Injectable } from '@angular/core';
import { BaseProviderService } from '../base-provider.service';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';
import { DocumentModel, UserProfileModel } from 'src/app/_model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor(private baseProviderService: BaseProviderService, private http: HttpClient, private toastService: ToastrService, private authService: AuthService) { }
  // uploadFile(file: FormData): Observable<any> {
  //   return this.baseProviderService.makePostCall(`${environment.apiUrl}`, file)
  //     .pipe(
  //       map((res: any) => {
  //         if (res.type === HttpEventType.UploadProgress) {
  //           const uploading = Math.floor((100 * res.loaded) / res.total);
  //           // uploading = uploading <= 100 ? uploading : uploading;
  //           return { ...res, uploading: uploading }
  //         } else {
  //           return res;
  //         }
  //       })
  //     );
  // }
  // getAllDocuments(): Observable<any> {
  //   return this.baseProviderService.makeGetCall(`${environment.apiUrl}`);
  // }
  // deleteDocument(id:number){
  //   return this.baseProviderService.makeDeleteCall(`${environment.apiUrl}/${id}`);
  // }
  uploadFile(formData: FormData): Observable<any> {
    // let url = `${environment.baseUrl}/pdf-to-word?`;

    let url = `${environment.baseUrl}/api/docs?`;
    url = this.makeQueryparamUrl(url, { user_id: this.getUserId() });
    return this.baseProviderService.makePostCall(url, formData);
  }
  getAllDocuments(isArchivedList: boolean, query: string): Observable<any> {
    // const url = `${environment.baseUrl}/api/docs`;

    let url = `${environment.baseUrl}/api/docs?`;
    url = this.makeQueryparamUrl(url, { user_id: this.getUserId(), query, isArchivedList });
    return this.baseProviderService.makeGetCall(url);
  }
  getDocumentById(id: string): Observable<any> {
    // const url = `${environment.baseUrl}/api/docs/${id}`;

    let url = `${environment.baseUrl}/api/docs/${id}?`;
    url = this.makeQueryparamUrl(url, { user_id: this.getUserId() });
    return this.baseProviderService.makeGetCall(url);
  }
  deleteDocument(isArchivedList: boolean, id: string,): Observable<any> {
    // const url = `${environment.baseUrl}/api/docs/${id}`;

    let url = `${environment.baseUrl}/api/docs/${id}?`;
    url = this.makeQueryparamUrl(url, { user_id: this.getUserId(), isArchivedList });

    return this.baseProviderService.makeDeleteCall(url);
  }
  restoreDocument(id: string): Observable<any> {
    let url = `${environment.baseUrl}/api/docs/${id}?`;
    url = this.makeQueryparamUrl(url, { user_id: this.getUserId() });

    return this.baseProviderService.makePatchCall(url, {});
  }
  getCredits(): Observable<any> {
    let url = `${environment.baseUrl}/api/credits?`;
    url = this.makeQueryparamUrl(url, { user_id: this.getUserId() });

    return this.baseProviderService.makeGetCall(url);
  }
  getReferalDetail(): Observable<any> {
    let url = `${environment.baseUrl}/api/referal?`;
    url = this.makeQueryparamUrl(url, { user_id: this.getUserId() });

    return this.baseProviderService.makeGetCall(url);
  }
  getReferals(): Observable<any> {
    const url = `${environment.baseUrl}/api/referal`;
    return this.baseProviderService.makeGetCall(url);
  }
  downloadFile(data: DocumentModel, type: string) {
    // return this.baseProviderService.makeGetFile(`${environment.baseUrl}/api/download/${id}`, 'blob');
    const user_id = this.getUserId();
    const body = {
      data,
      user_id,
      type
    }
    return this.http.post(`${environment.baseUrl}/download`, body,{responseType:'blob'});
  }
  exportDataInExcel(id: string): void {
    // return this.baseProviderService.makeGetCall(`${environment.baseUrl}/api/export/${id}`);
    window.open(`${environment.baseUrl}/api/export/${id}`, '_blank');
  }
  makeQueryparamUrl(url: string, searchParam: any): any {
    for (const key in searchParam) {
      if (searchParam[key] !== undefined && searchParam[key] !== null && searchParam[key] !== '') {
        url = url + key + '=' + encodeURIComponent(searchParam[key]) + '&';
      }
    }
    if (url.endsWith('&')) {
      url = url.slice(0, -1);
      return url;
    }
  }
  copyTextClipbord(text: string): void {
    navigator.clipboard.writeText(text)
      .then(() => {
        this.toastService.success('Text copied successfully!', 'Success');
      })
      .catch((err) => {
        this.toastService.error('Unable to copy text:', 'Error');
        console.error('Unable to copy text: ', err);
      });
  }
  getUserId(): string {
    const userdata: UserProfileModel = this.authService.getUserData();
    return userdata.id
  }
}
