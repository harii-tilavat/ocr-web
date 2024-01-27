import { Injectable } from '@angular/core';
import { BaseProviderService } from '../base-provider.service';
import { Observable } from 'rxjs';
import { UserLoginModel } from 'src/app/_model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private baseProviderService: BaseProviderService) { }

  loginUser(userdata: any): Observable<any> {
    return this.baseProviderService.makePostCall(`${environment.baseUrl}/login`, userdata);
  }

}
