import { Injectable } from '@angular/core';
import { BaseProviderService } from '../base-provider.service';
import { Observable } from 'rxjs';
import { UserLoginModel } from 'src/app/_model';
import { environment } from 'src/environments/environment';
import { FileUploadService } from '../file-upload/file-upload.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private baseProviderService: BaseProviderService, private fileuploadService: FileUploadService) { }

  loginUser(userdata: any): Observable<any> {
    return this.baseProviderService.makePostCall(`${environment.baseUrl}/login`, userdata);
  }
  registerUser(userdata: any): Observable<any> {
    return this.baseProviderService.makePostCall(`${environment.baseUrl}/register`, userdata);
  }
  updateUser(user_id: string, userdata: any): Observable<any> {
    return this.baseProviderService.makePutCall(`${environment.baseUrl}/update-user/${user_id}`, userdata);
  }
  forgotPassword(email: string | null): Observable<any> {
    return this.baseProviderService.makePostCall(`${environment.baseUrl}/forgot-password`, { email });
  }
  verifyOtp(otp: string | null): Observable<any> {
    return this.baseProviderService.makePostCall(`${environment.baseUrl}/verify-otp`, { otp });
  }
  resetPassword(userdata: any): Observable<any> {
    return this.baseProviderService.makePostCall(`${environment.baseUrl}/reset-password`, userdata);
  }
}
