import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmployeeModel, EmployeeResponseModel } from 'src/app/_model';
import { EmployeeService } from 'src/app/_services';
import { NgbModal } from 'src/app/shared/ng-modal';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public empData: any = [];
  public isLoading = false;
  public editMode = false;
  public editedEmployeeId!: string;
  public employeSub!: Observable<any>;
  public empForm: FormGroup = new FormGroup({
    empName: new FormControl(null, [Validators.required]),
    empLocation: new FormControl(null, [Validators.required]),
    empPosition: new FormControl(null, [Validators.required]),
    empSalary: new FormControl(null, [Validators.required]),
  })
  constructor(private employeeService: EmployeeService, private toastService: ToastrService, private ngbModel: NgbModal) { }
  ngOnInit(): void {
    // this.getEmployess();
    this.getEmployess();
  }
  onSubmit(): void {
    if (!this.empForm.valid) {
      this.toastService.error('Please fill all fields! ', 'Error');
      return
    }
    this.isLoading = true;
    if (this.editMode && this.editedEmployeeId) {
      this.employeSub = this.employeeService.updateEmployee(this.editedEmployeeId, this.empForm.value);
      this.employeeHandler();
    } else {
      this.employeSub = this.employeeService.addEmployee(this.empForm.value);
      this.employeeHandler();
    }
  }
  employeeHandler(): void {
    this.employeSub.subscribe({
      next: (res: EmployeeResponseModel) => {
        this.getEmployess();
        this.toastService.success(res.message, 'Success');
        this.resetForm();
      }, error: (err: HttpErrorResponse) => {
        console.log(err);
        this.toastService.error(err.message ? err.message :'Something went wrong!', 'Error');
        this.resetForm();
      }
    })
  }
  getEmployess(): void {
    this.employeeService.getEmployees().subscribe({
      next: (res) => {
        this.empData = res.data;
      }, error: (err) => {
        console.log("get employee error ==>> ",err);
      }
    })
  }
  deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (res: any) => {
        console.log("Delete response! ", res);
        this.toastService.success(res.message, 'Success');
        this.getEmployess();
      },
      error: (err) => {
        this.toastService.error(err.error.message, 'Error');
      }
    });
  }
  editEmployee(item: EmployeeModel): void {
    this.editMode = true;
    this.editedEmployeeId = item.empId;
    this.empForm.setValue({
      empName: item.empName,
      empLocation: item.empLocation,
      empPosition: item.empPosition,
      empSalary: item.empSalary
    })
  }
  resetForm(): void {
    this.empForm.reset();
    this.editMode = false;
    this.isLoading = false;
  }
}