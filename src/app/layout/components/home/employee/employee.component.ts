import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeModel } from 'src/app/_model';
import { EmployeeService } from 'src/app/_services';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public empData: any = [];
  public empForm: FormGroup = new FormGroup({
    empName: new FormControl(null, [Validators.required]),
    empLocation: new FormControl(null, [Validators.required]),
    empPosition: new FormControl(null, [Validators.required]),
    empSalary: new FormControl(null, [Validators.required]),
  })
  constructor(private employeeService: EmployeeService, private toastService: ToastrService) { }
  ngOnInit(): void {
    // this.getEmployess();
    this.getEmployess();
  }
  onSubmit(): void {
    if (!this.empForm.valid) {
      this.toastService.error('Please fill all fields! ', 'Error');
      return
    }
    this.employeeService.addEmployee(this.empForm.value).subscribe({
      next: (res: any) => {
        this.toastService.success(res.msg, 'Success');
        this.getEmployess();
        this.empForm.reset();
      }, error: (err) => {
        console.log(err);
        this.toastService.error('Something went wrong!', 'Error');
      }
    });
  }
  getEmployess(): void {
    this.employeeService.getEmployees().subscribe({
      next: (res) => {
        this.empData = res.data;

      }, error: (err) => {
        console.log(err);
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
  updateEmployee(item: EmployeeModel): void {
    this.empForm.setValue({
      empName: item.empName,
      empLocation: item.empLocation,
      empPosition: item.empPosition,
      empSalary: item.empSalary
    })
  }
}
