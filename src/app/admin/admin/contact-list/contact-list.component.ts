import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ContactListModel } from 'src/app/_model';
import { AuthService, FileUploadService } from 'src/app/_services';
import { AlertBoxComponent } from 'src/app/shared/basic/alert-box/alert-box.component';
import { NgbModal } from 'src/app/shared/ng-modal';
import { UserDetailComponent } from '../users-list/user-detail/user-detail.component';
import { ContactDetailComponent } from 'src/app/admin/admin/contact-list/contact-detail/contact-detail.component';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy {
  public isLoading = false;
  public currentPage = 1;
  public itemList: Array<ContactListModel> = [];
  public subscription: Array<Subscription> = [];

  constructor(private authService: AuthService, private toastrService: ToastrService, private router: Router, private modalService: NgbModal, private fileUploadService: FileUploadService) { }
  ngOnInit(): void {
    this.isLoading = true;
    this.subscription.push(
      this.fileUploadService.getContactList().subscribe({
        next: (res) => {
          this.itemList = res.data;
          console.log("Response => ", res);
          this.isLoading = false;
        },
        error: (err) => {
          console.log("Users list error => ", err);
          this.isLoading = false;
        }
      })
    );
  }
  async viewItem(item: ContactListModel): Promise<any> {
    if (!this.modalService.hasOpenModals()) {
      const modalRef = this.modalService.open(ContactDetailComponent, { size: 'xl', keyboard: false });
      modalRef.componentInstance.contactDetail = item;
    }
  }
  async editItem(item: ContactListModel): Promise<any> {
    if (!this.modalService.hasOpenModals()) {
      const modalRef = this.modalService.open(ContactDetailComponent, { size: 'xl', keyboard: false });
      modalRef.componentInstance.contactDetail = item;
    }
  }
  async deleteItem(item: ContactListModel): Promise<any> {
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
