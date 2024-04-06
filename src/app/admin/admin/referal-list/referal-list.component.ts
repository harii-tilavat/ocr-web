import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GenericresponseModel, UserProfileModel } from 'src/app/_model';
import { AuthService, FileUploadService } from 'src/app/_services';
import { NgbModal } from 'src/app/shared/ng-modal';
@Component({
  selector: 'app-referal-list',
  templateUrl: './referal-list.component.html',
  styleUrls: ['./referal-list.component.scss']
})
export class ReferalListComponent implements OnInit, OnDestroy {
  public isLoading = false;
  public currentPage = 1;
  public itemList: Array<any> = [];
  public subscription: Array<Subscription> = [];

  constructor(private authService: AuthService, private toastrService: ToastrService, private router: Router, private modalService: NgbModal, private fileUploadService: FileUploadService) { }
  ngOnInit(): void {
    this.isLoading = true;
    this.subscription.push(
      this.fileUploadService.getReferalList().subscribe({
        next: (res: GenericresponseModel) => {
          this.itemList = res.data;
          console.log("Response => ", res);
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.log("Users list error => ", err);
          this.isLoading = false;
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
