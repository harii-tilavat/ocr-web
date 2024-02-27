import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DocumentModel, DocumentResponseModel, pdfPlaceholder } from 'src/app/_model';
import { FileUploadService } from 'src/app/_services';
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
export class FileDataComponent implements OnInit {
  public pdfPlaceholder:string = pdfPlaceholder;
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
  constructor(private fileUploadService: FileUploadService, private toastrService: ToastrService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getAllDocuments();
  }
  getAllDocuments(): void {
    this.fileUploadService.getAllDocuments().subscribe({
      next: (res) => {
        if (res && res.data) {
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
    this.router.navigate([id], { relativeTo: this.route })
  }
  onDeleteFile(id: string): void {
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
  onEditFile(id: string): void {

  }
  onDownloadFile(filename: string) {

  }
}

