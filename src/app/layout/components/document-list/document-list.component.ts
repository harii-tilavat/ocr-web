import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { FileTypeEnum } from 'src/app/_enum';
import { DocumentModel } from 'src/app/_model';
import { FileUploadService } from 'src/app/_services';
import { AlertBoxComponent } from 'src/app/shared/basic/alert-box/alert-box.component';
import { NgbModal } from 'src/app/shared/ng-modal';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  @Input() isArchivedList = false;
  public searchQuery = '';
  public searchForm: FormGroup = new FormGroup({ query: new FormControl('', []) });
  public isLoading = false;
  public documentList: Array<DocumentModel> = [];
  // public pagination
  constructor(private modalService: NgbModal, private fileUploadService: FileUploadService, private toastrService: ToastrService) { }
  ngOnInit(): void {
    console.log("recycle => ", this.isArchivedList);
    // this.searchLoading.emit(true);
    this.searchForm.controls['query'].valueChanges.pipe(tap(() => this.isLoading = true), debounceTime(1000), distinctUntilChanged())
      .subscribe((res) => {
        this.searchQuery = res;
        this.isLoading = false;
      })
  }
  getDocuments(event: Array<DocumentModel>): void {
    this.documentList = event;
    // this.displayDocuments = this.documentList.slice(0, 3);
  }
  async exportExcel(): Promise<any> {
    if (!this.modalService.hasOpenModals()) {
      const modalRef = this.modalService.open(AlertBoxComponent, { size: 'sm', backdrop: 'static', keyboard: false, centered: true, windowClass: 'alertbox', container: '#alertbox' });
      modalRef.componentInstance.title = 'Do you want to export?';
      modalRef.componentInstance.message = 'Excel file will be downloaded!';
      modalRef.componentInstance.icon = { name: 'bx bx-export' };
      modalRef.componentInstance.type = 'primary';
      modalRef.componentInstance.primeBtn = 'Export';
      const result = await modalRef.result;
      if (result) {
        this.fileUploadService.downloadFile(null, FileTypeEnum.EXPORT_EXCEL).subscribe({
          next: (res: any) => {
            this.toastrService.error('Data sucessfully exported in excel!', 'Sucess');
            saveAs(res, 'downloaded_file');
          },
          error: (err) => {
            console.log("ERROR => ", err);
            this.toastrService.error(err && err.error && err.error.message || 'Something went wrong', 'ERROR');
          }
        });
      }
    }
  }
  ngOnDestroy(): void {
    this.searchForm.reset();
  }
}
