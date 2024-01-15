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
    return this.baseProviderService.makePostCall(`${environment.apiUrl}`, file)
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
  getAllDocuments(): Observable<any> {
    return this.baseProviderService.makeGetCall(`${environment.apiUrl}`);
  }
  deleteDocument(id:number){
    return this.baseProviderService.makeDeleteCall(`${environment.apiUrl}/${id}`);
  }
  getEmployees(): Observable<any> {
    return this.baseProviderService.makeGetCall(`${environment.baseUrl}/users`);
  }
}
