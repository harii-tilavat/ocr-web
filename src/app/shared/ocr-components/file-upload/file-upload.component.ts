import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DocumentModel, DocumentModelResponseModel } from 'src/app/_model';
import { FileUploadService } from 'src/app/_services';
import { NgbModal } from '../../ng-modal';
import { FileViewComponent } from './file-view/file-view.component';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  public fileForm: FormGroup = new FormGroup({
    file: new FormControl('', [Validators.required])
  })
  public subscription: Array<Subscription> = [];
  public filePreviewBase64!: string | null;
  public isFileSelected = false;
  public isUploading!: boolean;
  public files!: any;
  public fileText!: string;
  public documentList: Array<DocumentModel> = [];
  public fileErrorMessage!: string | null;
  private allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  public maxFileSize: number = 5 * 1024 * 1024;

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
        this.removeSelectedFile();
      }
    })
  }
  fileSelected(event: Event): void {
    this.files = (event.target as HTMLInputElement).files;
    console.log("Files ==>> ",);

    if (this.files && this.files[0]) {
      const file = this.files[0];
      if (!this.validFile(file)) {
        this.toastrService.error(this.fileErrorMessage || 'Something went wrong!', 'Error');
        this.removeSelectedFile();
        return;
      }
      this.convertFileToBase64(file);
      this.isFileSelected = true;
    }
  }

  convertFileToBase64(file: File): void {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.filePreviewBase64 = reader.result as string;
      }
      reader.readAsDataURL(file);
    }
  }
  onUploadFile(): void {
    if (this.isFileSelected) {
      this.isUploading = true;
      this.toastrService.info('File uploading...', 'Wait');
      const formData = new FormData();
      formData.set("file", this.files[0]);
      this.fileUploadService.uploadFile(formData).subscribe({
        next: (res: DocumentModelResponseModel) => {
          this.fileText = res.data.ocr_text;
          this.isUploading = false;
          this.toastrService.success(res.message, 'Success');
          this.getAllDocuments();
        },
        error: (err: HttpErrorResponse) => {
          this.toastrService.error(err.error.error, 'Uploading error!');
          console.log("File uploading error ==>> ", err);
          this.removeSelectedFile();
        }
      })
    }
  }
  onDeleteDocument(id: string): void {
    if (confirm('Are you sure to delete this ? ')) {
      this.fileUploadService.deleteDocument(id).subscribe({
        next: (res: any) => {
          console.log(res.message);
          this.toastrService.success(res.message, 'Success');
          this.getAllDocuments();
        }, error: (err: HttpErrorResponse) => {
          console.log("Delete Error ==>> ", err);
          this.toastrService.error(err.error.message, 'Error');
        }
      })
    }
  }
  removeSelectedFile(): void {
    this.filePreviewBase64 = null;
    this.isFileSelected = false;
    this.files = [];
    this.fileText = '';
    this.isUploading = false;
    this.fileForm.reset();
  }
  onViewFile(): void {
    this.ngbModel.open(FileViewComponent, { scrollable: true, size: 'lg', fullscreen: 'xl' });
  }
  private validFile(file: File): boolean {
    this.fileErrorMessage = null;
    if (!this.allowedMimeTypes.includes(file.type)) {
      this.fileErrorMessage = 'Invalid file type. Please select a valid image or PDF file.';
      return false;
    }
    if (file.size > this.maxFileSize) {
      this.fileErrorMessage = `File size exceeds the allowed limit (${this.maxFileSize / 1024 / 1024} MB).`;
      return false;
    }
    return true;
  }
}