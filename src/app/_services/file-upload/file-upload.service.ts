import { Injectable } from '@angular/core';
import { BaseProviderService } from '../base-provider.service';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor(private baseProviderService: BaseProviderService, private http: HttpClient, private toastService: ToastrService) { }
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
  uploadFile(formData: FormData, user_id: string): Observable<any> {
    let url = `${environment.baseUrl}/api/docs?`;
    url = this.makeQueryparamUrl(url, { user_id });
    return this.baseProviderService.makePostCall(url, formData);
  }
  getAllDocuments(params: any): Observable<any> {
    let url = `${environment.baseUrl}/api/docs?`;
    url = this.makeQueryparamUrl(url, params);
    console.log("URL => ", url);
    return this.baseProviderService.makeGetCall(url);
  }
  getDocumentById(id: string): Observable<any> {
    return this.baseProviderService.makeGetCall(`${environment.baseUrl}/api/docs/${id}`);
  }
  deleteDocument(id: string): Observable<any> {
    return this.baseProviderService.makeDeleteCall(`${environment.baseUrl}/api/docs/${id}`);
  }
  downloadFile(id: string) {
    return this.baseProviderService.makeGetFile(`${environment.baseUrl}/api/download/${id}`, 'blob');
  }
  makeQueryparamUrl(url: string, searchParam: any): any {
    if (searchParam) {
      for (const key in searchParam) {
        if (searchParam[key] !== undefined && searchParam[key] !== null && searchParam[key] !== '') {
          url = url + key + '=' + encodeURIComponent(searchParam[key]) + '&';
        }
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
}
