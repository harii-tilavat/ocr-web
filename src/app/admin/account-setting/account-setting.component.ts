import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public subscription: Array<Subscription> = [];
  public userForm!: FormGroup;
  public userdata !: UserProfileModel;
  public referalList!: Array<UserProfileModel>;
  public referalLink = window.location.origin;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private loginService: LoginService, private toastrService: ToastrService, private fileuploadService: FileUploadService, private loaderService: LoaderService) { }
  ngOnInit(): void {
    this.getReferalDetail();
    this.userdata = this.authService.getUserData();
    this.setUserForm(this.userdata);
    if (this.userdata && this.userdata.ref_code) {
      this.referalLink = this.referalLink + `/auth/signup?user_ref_code=${this.userdata.ref_code}`;
    }
  }
  onUpdate(): void {
    console.log(this.userForm);
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
