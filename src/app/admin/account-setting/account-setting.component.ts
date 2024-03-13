import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfileModel } from 'src/app/_model';
import { AuthService } from 'src/app/_services';
import { CustomValidatorRules } from 'src/app/_validators';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss']
})
export class AccountSettingComponent implements OnInit {
  public userForm!: FormGroup;
  public userdata !: UserProfileModel;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }
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
    console.log("Form => ", this.userForm.value);

  }
  resetForm(): void {
    this.setUserForm(this.userdata);
  }
  setUserForm(userdata: UserProfileModel): void {
    this.userForm = this.formBuilder.group({
      name: [userdata.name, Validators.required],
      lastname: [userdata.lastname,Validators.required],
      country: [userdata.country, Validators.required],
      // email: [this.userdata.email, [Validators.required, CustomValidatorRules.emailValidation]],
      number: [userdata.number, [Validators.required, Validators.minLength(10)]],
    });
  }
}
