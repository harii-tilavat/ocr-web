import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DocumentModel, DocumentResponseModel } from 'src/app/_model';
import { FileUploadService } from 'src/app/_services';
import { NgbModal } from '../../ng-modal';
import { FileViewComponent } from '../file-upload/file-view/file-view.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-data',
  templateUrl: './file-data.component.html',
  styleUrls: ['./file-data.component.scss']
})
export class FileDataComponent implements OnInit {
  public documentList: Array<DocumentModel> = [];
  constructor(private fileUploadService: FileUploadService, private toastrService: ToastrService, private ngbModel: NgbModal) { }
  ngOnInit(): void {
    this.getAllDocuments();
  }
  getAllDocuments(): void {
    this.fileUploadService.getAllDocuments().subscribe({
      next: (res) => {
        if (res.data.length) {
          this.documentList = res.data;
          console.log("Response ===>>> ", this.documentList);
        }
      }, error: (err) => {
        console.log("File getting error ==>> ", err);
        // this.removeSelectedFile();
      }
    })
  }
  onViewFile(id: string): void {
    this.fileUploadService.getDocumentById(id).subscribe({
      next: (res: DocumentResponseModel) => {
        const modelRef = this.ngbModel.open(FileViewComponent, { scrollable: true, size: 'xl', fullscreen: 'xl', });
        modelRef.componentInstance.modelData = res.data;
      },
      error: (err) => {
        this.toastrService.error(err && err.message ? err.message : 'Something went wrong!', 'Error');
      }
    })
  }
  onDeleteDocument(id: string): void {
    if (confirm('Are you sure to delete this ? ')) {
      this.fileUploadService.deleteDocument(id).subscribe({
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
}
