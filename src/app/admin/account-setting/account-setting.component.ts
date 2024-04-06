import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DocumentResponseModel, UserProfileModel, UserResponseModel } from 'src/app/_model';
import { AuthService, FileUploadService, LoaderService, LoginService } from 'src/app/_services';
import { CustomValidatorRules } from 'src/app/_validators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss']
})
export class AccountSettingComponent implements OnInit {
  public isAdmin = false;
  public resetPassForm = new FormGroup({
    password: new FormControl<string | null>(null, [Validators.required, Validators.minLength(6)]),
    newPassword: new FormControl<string | null>(null, [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl<string | null>(null, [Validators.required,])
  });
  public subscription: Array<Subscription> = [];
  public userForm!: FormGroup;
  public userdata !: UserProfileModel;
  public referalList!: Array<UserProfileModel>;
  public referalLink = window.location.origin;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private loginService: LoginService, private toastrService: ToastrService, private fileuploadService: FileUploadService, private loaderService: LoaderService) { }
  ngOnInit(): void {
    this.getReferalDetail();
    this.userdata = this.authService.getUserData();
    this.isAdmin = this.authService.isAdmin();
    this.setUserForm(this.userdata);
    if (this.userdata && this.userdata.ref_code) {
      this.referalLink = this.referalLink + `/auth/signup?user_ref_code=${this.userdata.ref_code}`;
    }
  }
  onUpdate(): void {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return;
    }
    this.loaderService.show();
    this.setUserForm(this.userForm.value);
    this.subscription.push(this.loginService.updateUser(this.userdata.id, this.userForm.value).subscribe({
      next: (res: any) => {
        this.toastrService.success(res.message, 'Sucess');
        this.loaderService.hide();
      },
      error: (err) => {
        console.log("UPdate error => ", err);
        this.toastrService.error('Data not updated! ', 'ERROR');
        this.loaderService.hide();
      }
    }));

  }
  resetPassowrd(): void {
    const userInfo: UserProfileModel = this.authService.getUserData();
    if (!this.resetPassForm.valid) {
      this.resetPassForm.markAllAsTouched();
      return;
    }
    const userdata = { ...this.resetPassForm.value, user_id: userInfo.id, email: userInfo.email }
    this.loaderService.show();
    this.subscription.push(this.loginService.resetPassword(userdata).subscribe({
      next: (res: any) => {
        this.toastrService.success(res.message, 'Sucess');
        this.loaderService.hide();
        this.resetPassForm.reset();
      },
      error: (err) => {
        console.log("Password change => ", err);
        this.toastrService.error(err && err.error && err.error.message, 'ERROR');
        this.loaderService.hide();
      }
    }))
  }
  normalForm(): void {
    this.setUserForm(this.userdata);
  }
  setUserForm(userdata: UserProfileModel): void {
    this.userForm = this.formBuilder.group({
      name: [userdata.name, Validators.required],
      lastname: [userdata.lastname, Validators.required],
      country: [userdata.country || 'India', Validators.required],
      // email: [this.userdata.email, [Validators.required, CustomValidatorRules.emailValidation]],
      number: [userdata.number, [Validators.required, Validators.minLength(10)]],
    });
  }
  getReferalDetail(): void {
    this.subscription.push(this.fileuploadService.getReferalDetail().subscribe({
      next: (res: UserResponseModel) => {
        this.referalList = res.data;
      }
    }));
  }
  copyReferLink(link: string): void {
    this.fileuploadService.copyTextClipbord(link);
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
