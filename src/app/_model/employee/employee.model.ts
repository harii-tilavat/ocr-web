export class EmployeeModel {
  empId!: string;
  empName!: string;
  empLocation!: string;
  empPosition!: string;
  empSalary!: number;
}
export class EmployeeResponseModel {
  success!: boolean;
  message!: string;
  // data?: EmployeeModel;
}
