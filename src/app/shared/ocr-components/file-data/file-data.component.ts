import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DocumentModel, DocumentResponseModel, UserProfileModel, pdfPlaceholder } from 'src/app/_model';
import { AuthService, FileUploadService, LoaderService } from 'src/app/_services';
import { NgbModal } from '../../ng-modal';
import { FileViewComponent } from '../file-view/file-view.component';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-file-data',
  templateUrl: './file-data.component.html',
  styleUrls: ['./file-data.component.scss']
})
export class FileDataComponent implements OnInit, OnChanges {
  @Input() isArchivedList = false;
  @Input() searchQuery = '';
  @Input() isLoading = false;
  @Output() documentListEvent = new EventEmitter<Array<DocumentModel>>();
  public displayedDocuments: Array<DocumentModel> = [];
  public pdfPlaceholder: string = pdfPlaceholder;
  public documentList: Array<DocumentModel> = [];
  public metadata: Array<any> = [
    {
      id: 1,
      title: 'File name',
      subTitle: 'samplefile.png',
    },
    {
      id: 2,
      title: 'File size',
      subTitle: '25kb',
    },
    {
      id: 3,
      title: 'File type',
      subTitle: 'PDF',
    },
    {
      id: 4,
      title: 'Created at',
      subTitle: new Date().toLocaleString(),
    },
  ];
  public baseUrl: string = environment.baseUrl;
  constructor(private fileUploadService: FileUploadService, private toastrService: ToastrService, private router: Router, private route: ActivatedRoute, private authService: AuthService, private loaderService: LoaderService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Search ==> ", this.searchQuery);
    this.getAllDocuments();
  }
  ngOnInit(): void {
    this.getAllDocuments();
  }
  getAllDocuments(): void {
    // this.loaderService.show();
    this.fileUploadService.getAllDocuments(this.isArchivedList, this.searchQuery).subscribe({
      next: (res) => {
        if (res && res.data) {
          this.documentList = res.data;
          console.log("Response ===>>> ", this.documentList);
          this.displayedDocuments = this.documentList.slice(0, 3);
          this.documentListEvent.emit(this.documentList);
          // this.loaderService.hide();
          // this.isLoading = false;
        }
      }, error: (err) => {
        console.log("File getting error ==>> ", err);
        this.loaderService.hide();
        // this.removeSelectedFile();
      }
    })
  }
  onViewFile(id: string): void {
    if (!this.isArchivedList) {
      this.router.navigate([id], { relativeTo: this.route });
    } else {
      this.toastrService.error('Please resotre this file to see!', 'Error');
    }
  }
  onRestoreFile(id: string): void {
    this.fileUploadService.restoreDocument(id).subscribe({
      next: (res: DocumentResponseModel) => {
        this.getAllDocuments();
        this.toastrService.success(res.message, 'Success');
      },
      error: (err: HttpErrorResponse) => {
        this.toastrService.error(err.error.message || 'This file can not be restored!', 'ERROR');
      }
    })
  }
  onDeleteFile(id: string): void {
    // if (!this.modalService.hasOpenModals()) {
    //   const modalRef = this.modalService.open(AlertBoxComponent, { size: 'sm', backdrop: 'static', keyboard: false, centered: true, windowClass: 'alertbox', container: '#alertbox' });
    //   modalRef.componentInstance.title = 'Are you sure?';
    //   modalRef.componentInstance.message = 'Do you want to Logout!';
    //   modalRef.componentInstance.icon = { name: 'bx bx-power-off' };
    //   modalRef.componentInstance.type = 'danger';
    //   modalRef.componentInstance.primeBtn = 'Logout';
    //   const result = await modalRef.result;
    //   if (result) {
    //     localStorage.clear();
    //     this.isLoggedInSubject.next(false);
    //     this.router.navigate(['/auth']);
    //   }
    // }
    if (confirm(!this.isArchivedList ? 'Are you sure to moved in recycle bin? ' : 'Are you sure to permenentaly delete this file?')) {
      this.fileUploadService.deleteDocument(this.isArchivedList, id).subscribe({
        next: (res: DocumentResponseModel) => {
          this.getAllDocuments();
          this.toastrService.success(res.message, 'Success');
        }, error: (err: HttpErrorResponse) => {
          console.log("Delete Error ==>> ", err);
          this.toastrService.error(err.error.message, 'Error');
        }
      })
    }
  }
  onEditFile(id: string): void {

  }
  onDownloadFile(filename: string) {

  }
  loadDocuments(total_page: number): void {
    this.displayedDocuments = this.documentList.slice(0, this.displayedDocuments.length + total_page);
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 0);
  }
}

