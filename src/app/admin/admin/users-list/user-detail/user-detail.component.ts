import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GenericresponseModel, UserProfileModel } from 'src/app/_model';
import { AuthService, FileUploadService, LoaderService, LoginService } from 'src/app/_services';
import { NgbActiveModal, NgbModal } from 'src/app/shared/ng-modal';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  public userDetail!: UserProfileModel;
  public editMode = false;
  public subscription: Array<Subscription> = [];
  public userForm!: FormGroup;
  constructor(private authService: AuthService, private toastrService: ToastrService, private router: Router, private modalService: NgbModal, private fileUploadService: FileUploadService, private loginService: LoginService, private loaderService: LoaderService,public activeModal: NgbActiveModal) { }
  ngOnInit(): void {
    this.userForm = new FormGroup({
      type: new FormControl<string | null>(this.userDetail.type, [Validators.required]),
      is_verified: new FormControl<any>(this.userDetail.is_verified, Validators.required)
    });
  }
  onSubmit(): void {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return
    }
    const { type, is_verified } = this.userForm.value;
    console.log(type);
    if (type !== 'ADMIN' && type !== 'USER') {
      return
    }
    this.loaderService.show();
    this.subscription.push(this.loginService.setType(this.userDetail.id, type, is_verified ? 1 : 0).subscribe({
      next: (res: GenericresponseModel) => {
        this.toastrService.success(res.message, 'Sucess');
        this.loaderService.hide();
        this.activeModal.close(true);
      },
      error: (err) => {
        console.log("Password change => ", err);
        this.toastrService.error(err && err.error && err.error.message, 'ERROR');
        this.loaderService.hide();
        this.activeModal.close(false);
      }
    }))

  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }

}
