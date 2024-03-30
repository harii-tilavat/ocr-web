import { Component,OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { FeedbackListModel, UserProfileModel } from 'src/app/_model';
import { AuthService, FileUploadService } from 'src/app/_services';
import { AlertBoxComponent } from 'src/app/shared/basic/alert-box/alert-box.component';
import { NgbModal } from 'src/app/shared/ng-modal';
import { UserDetailComponent } from '../users-list/user-detail/user-detail.component';
@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})
export class FeedbackListComponent implements OnInit, OnDestroy {
  public currentPage = 1;
  public isLoading = false;
  public pagination = {
    currentPage: 1,
    totalPage: 15,
    itemsPerPage: 100
  }
  public itemList: Array<FeedbackListModel> = [];
  public subscription: Array<Subscription> = [];

  constructor(private authService: AuthService, private toastrService: ToastrService, private router: Router, private modalService: NgbModal, private fileUploadService: FileUploadService) { }
  ngOnInit(): void {
    this.isLoading  = true;
    this.subscription.push(
      this.fileUploadService.getFeedbackList().subscribe({
        next: (res) => {
          this.itemList = res.data;
          console.log("Response => ", res);
          this.isLoading  = false;
        },
        error: (err) => {
          console.log("Feedback list error => ", err);
          this.isLoading  = false;
        }
      })
    );
  }
  async viewItem(item: FeedbackListModel): Promise<any> {
    if (!this.modalService.hasOpenModals()) {
      const modalRef = this.modalService.open(UserDetailComponent, { size: 'xl', keyboard: false });
      modalRef.componentInstance.userDetail = item;
    }
  }
  async editItem(item: FeedbackListModel): Promise<any> {
    if (!this.modalService.hasOpenModals()) {
      const modalRef = this.modalService.open(UserDetailComponent, { size: 'xl', keyboard: false });
      modalRef.componentInstance.userDetail = item;
    }
  }
  async deleteItem(item: FeedbackListModel): Promise<any> {
    if (!this.modalService.hasOpenModals()) {
      const modalRef = this.modalService.open(AlertBoxComponent, { size: 'sm', backdrop: 'static', keyboard: false, centered: true, windowClass: 'alertbox', container: '#alertbox' });
      modalRef.componentInstance.title = 'Are you sure?';
      modalRef.componentInstance.message = 'Do you want to Delete this user!';
      modalRef.componentInstance.icon = { name: 'bx bx-trash' };
      modalRef.componentInstance.type = 'danger';
      modalRef.componentInstance.primeBtn = 'Delete user';
      const result = await modalRef.result;
      // if (result) {
      // }
    }
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
