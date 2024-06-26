import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DocumentModel, DocumentResponseModel, UserProfileModel, pdfPlaceholder } from 'src/app/_model';
import { AuthService, FileUploadService, LoaderService } from 'src/app/_services';
import { NgbModal } from '../../ng-modal';
import { FileViewComponent } from '../file-view/file-view.component';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertBoxComponent } from '../../basic/alert-box/alert-box.component';
import { FileTypeEnum } from 'src/app/_enum';
import { saveAs } from 'file-saver';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-file-data',
  templateUrl: './file-data.component.html',
  styleUrls: ['./file-data.component.scss']
})
export class FileDataComponent implements OnInit, OnChanges, OnDestroy {
  @Input() isArchivedList = false;
  @Input() searchQuery = '';
  @Input() isLoading = false;
  @Input() itemPerPage = 4;
  @Output() documentListEvent = new EventEmitter<Array<DocumentModel>>();
  public subscription: Array<Subscription> = [];
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
  constructor(private fileUploadService: FileUploadService, private toastrService: ToastrService, private router: Router, private route: ActivatedRoute, private authService: AuthService, private loaderService: LoaderService, private modalService: NgbModal) { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("Search ==> ", this.searchQuery);
    this.getAllDocuments();
  }
  ngOnInit(): void {
    // this.getAllDocuments();
  }
  getAllDocuments(): void {
    // this.loaderService.show();
    this.isLoading = true;
    this.subscription.push(this.fileUploadService.getAllDocuments(this.isArchivedList, this.searchQuery).subscribe({
      next: (res) => {
        if (res && res.data) {
          this.documentList = res.data;
          // console.log("Response ===>>> ", this.documentList);
          this.displayedDocuments = this.documentList.slice(0, 4);
          this.documentListEvent.emit(this.documentList);
          // this.loaderService.hide();
          setTimeout(() => {
            this.isLoading = false;
          }, 800);
        }
      }, error: (err) => {
        console.log("File getting error ==>> ", err);
        this.loaderService.hide();
        // this.removeSelectedFile();
      }
    }));
  }
  onViewFile(id: string): void {
    if (!this.isArchivedList) {
      this.router.navigate([id], { relativeTo: this.route });
    } else {
      this.toastrService.error('Please resotre this file to see!', 'Error');
    }
  }
  onRestoreFile(id: string): void {
    this.loaderService.show();
    this.subscription.push(this.fileUploadService.restoreDocument(id).subscribe({
      next: (res: DocumentResponseModel) => {
        this.getAllDocuments();
        this.toastrService.success(res.message, 'Success');
        this.loaderService.hide();
      },
      error: (err: HttpErrorResponse) => {
        this.toastrService.error(err.error.message || 'This file can not be restored!', 'ERROR');
        this.loaderService.hide();
      }
    }));
  }
  async onDeleteFile(id: string): Promise<void> {
    if (!this.modalService.hasOpenModals()) {
      const modalRef = this.modalService.open(AlertBoxComponent, { size: 'sm', backdrop: 'static', keyboard: false, centered: true, windowClass: 'alertbox', container: '#alertbox' });
      modalRef.componentInstance.title = 'Are you sure';
      modalRef.componentInstance.message = !this.isArchivedList ? `Don't worry! You can recover this file from recycle bin!` : `This file will be deleted forever and you won't be able to restore it.`;
      modalRef.componentInstance.icon = { name: 'bx bx-trash' };
      modalRef.componentInstance.type = 'danger';
      modalRef.componentInstance.primeBtn = !this.isArchivedList ? 'Moved to bin' : 'Delete forever';
      const result = await modalRef.result;
      if (result) {
        this.loaderService.show();
        this.subscription.push(this.fileUploadService.deleteDocument(this.isArchivedList, id).subscribe({
          next: (res: DocumentResponseModel) => {
            this.getAllDocuments();
            this.toastrService.success(res.message, 'Success');
            this.loaderService.hide();
          }, error: (err: HttpErrorResponse) => {
            console.log("Delete Error ==>> ", err);
            this.toastrService.error(err.error.message, 'Error');
            this.loaderService.hide();
          }
        }));
      }
    }
  }
  onEditFile(id: string): void {

  }
  onDownloadFile(data: DocumentModel) {
    this.subscription.push(this.fileUploadService.downloadFile(data, FileTypeEnum.UPLOADED_FILE).subscribe({
      next: (res: any) => {
        console.log("File download response ", res);
        saveAs(res, data.file_name);
        this.toastrService.success('File dowloaded successfully! ', 'Success');
      }, error: (err) => {
        console.log("File dowload error => ", err);
        this.toastrService.error(err && err.error && err.error.message || 'File not exists', 'ERROR');
      }
    }));
  }
  loadDocuments(total_page: number): void {
    this.displayedDocuments = this.documentList.slice(0, this.displayedDocuments.length + total_page);
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 0);
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}

