import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseProviderService } from '../base-provider.service';
import { environment } from 'src/environments/environment';
import { EmployeeModel } from 'src/app/_model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private baseProviderService: BaseProviderService) { }

  getEmployees(): Observable<any> {
    return this.baseProviderService.makeGetCall(`${environment.baseUrl}/employees`);
  }
  addEmployee(data: EmployeeModel) {
    return this.baseProviderService.makePostCall(`${environment.baseUrl}/employees`, data);
  }
  deleteEmployee(id: string): Observable<any> {
    return this.baseProviderService.makeDeleteCall(`${environment.baseUrl}/employees/${id}`);
  }
}
