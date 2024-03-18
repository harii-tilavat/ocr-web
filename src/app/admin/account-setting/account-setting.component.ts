import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserProfileModel } from 'src/app/_model';
import { AuthService, LoginService } from 'src/app/_services';
import { CustomValidatorRules } from 'src/app/_validators';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss']
})
export class AccountSettingComponent implements OnInit {
  public userForm!: FormGroup;
  public userdata !: UserProfileModel;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private loginService: LoginService, private toastrService: ToastrService) { }
  ngOnInit(): void {
    this.userdata = this.authService.getUserData();
    console.log("Userdata => ", this.userdata);
    this.setUserForm(this.userdata);

  }
  onUpdate(): void {
    console.log(this.userForm);
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return;
    }
    this.setUserForm(this.userForm.value);
    this.loginService.updateUser(this.userdata.id, this.userForm.value).subscribe({
      next: (res: any) => {
        this.toastrService.success(res.message, 'Sucess');
      },
      error: (err) => {
        console.log("UPdate error => ", err);
        this.toastrService.error('Data not updated! ', 'ERROR');
      }
    })
    console.log("Form => ", this.userForm.value);

  }
  resetForm(): void {
    this.setUserForm(this.userdata);
  }
  setUserForm(userdata: UserProfileModel): void {
    this.userForm = this.formBuilder.group({
      name: [userdata.name, Validators.required],
      lastname: [userdata.lastname, Validators.required],
      country: [userdata.country, Validators.required],
      // email: [this.userdata.email, [Validators.required, CustomValidatorRules.emailValidation]],
      number: [userdata.number, [Validators.required, Validators.minLength(10)]],
    });
  }
}
