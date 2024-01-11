import { Injectable } from '@angular/core';
import { BaseProviderService } from '../base-provider.service';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor(private baseProviderService: BaseProviderService, private http: HttpClient) { }

  uploadFile(file: FormData): Observable<any> {
    return this.baseProviderService.makeUploadCall(`${environment.baseUrl}/uploads`, file)
      .pipe(
        map((res: any) => {
          if (res.type === HttpEventType.UploadProgress) {
            const uploading = Math.floor((100 * res.loaded) / res.total);
            // uploading = uploading <= 100 ? uploading : uploading;
            return { ...res, uploading: uploading }
          } else {
            return res;
          }
        })
      );
  }
  getData(): Observable<any> {
    // For testing purpose
    return this.http.get(`${environment.baseUrl}/data`);
  }
  getFilesData(): Observable<any> {
    // this.baseProviderService.addHeader('Accept','application/json');
    // this.baseProviderService.addHeader('CLIENT-ID','vrfnyNiV2hYKLiMuT7NTpxLCVrXPgt9YCJWs6tl');
    // this.baseProviderService.addHeader('Authorization','apikey jerryff81:57f6f447615b5c8d2cb9eb4107a0d572');
    // return this.baseProviderService.makeGetCall(`${environment.apiUrl}/177897788`);
    return this.http.get(`${environment.apiUrl}/177897788`,{
      headers:{
       'Accept':'application/json',
       'CLIENT-ID':'vrfnyNiV2hYKLiMuT7NTpxLCVrXPgt9YCJWs6tl',
       'Authorization':'apikey jerryff81:57f6f447615b5c8d2cb9eb4107a0d572'
      }
    });
  }
  getEmployees():Observable<any>{
    return this.baseProviderService.makeGetCall(`${environment.baseUrl}/users`);
  }
}
