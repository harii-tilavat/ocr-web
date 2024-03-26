import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { UserProfileModel } from 'src/app/_model';
import { AuthService, FileUploadService } from 'src/app/_services';
import { NgbModal } from 'src/app/shared/ng-modal';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AlertBoxComponent } from 'src/app/shared/basic/alert-box/alert-box.component';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  public isLoading = false;
  public pagination = {
    currentPage: 1,
    totalPage: 15,
    itemsPerPage: 100
  }
  public itemList: Array<UserProfileModel> = [];
  public subscription: Array<Subscription> = [];
  public displayList: Array<UserProfileModel> = [];

  constructor(private authService: AuthService, private toastrService: ToastrService, private router: Router, private modalService: NgbModal, private fileUploadService: FileUploadService) { }
  ngOnInit(): void {
    this.isLoading = true;
    this.subscription.push(
      this.fileUploadService.getUserList().subscribe({
        next: (res) => {
          this.itemList = res.data;
          this.getPaginatedData();
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
  async viewItem(item: UserProfileModel): Promise<any> {
    if (!this.modalService.hasOpenModals()) {
      const modalRef = this.modalService.open(UserDetailComponent, { size: 'xl', keyboard: false });
      modalRef.componentInstance.userDetail = item;
    }
  }
  async editItem(item: UserProfileModel): Promise<any> {
    if (!this.modalService.hasOpenModals()) {
      const modalRef = this.modalService.open(UserDetailComponent, { size: 'xl', keyboard: false });
      modalRef.componentInstance.userDetail = item;
    }
  }
  async deleteItem(item: UserProfileModel): Promise<any> {
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
  getPaginatedData() {
    const startIndex = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;
    const endIndex = startIndex + this.pagination.itemsPerPage;
    this.displayList = this.itemList.slice(startIndex, endIndex);
  }
  onPageChange(page: number): void {
    this.pagination.currentPage = page;
  }
  get totalPages(): number {
    const totalPages = Math.floor(this.itemList.length / this.pagination.itemsPerPage) + (this.itemList.length % this.pagination.itemsPerPage === 0 ? 0 : 1);
    console.log("Total page =>", totalPages);
    return totalPages;
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
