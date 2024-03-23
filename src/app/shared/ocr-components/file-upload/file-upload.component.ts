import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CreditInfoModel, CreditResponseModel, DocumentModel, DocumentResponseModel, UserProfileModel } from 'src/app/_model';
import { AuthService, FileUploadService, LoaderService } from 'src/app/_services';
import { NgbModal } from '../../ng-modal';
import { FileViewComponent } from '../file-view/file-view.component';
import { FilePreviewComponent } from '../file-preview/file-preview.component';

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
  public creditInfo!: CreditInfoModel;
  public creditAvailable = false;
  public filePreviewBase64!: string | null;
  public isFileSelected = false;
  public isUploading!: boolean;
  public files!: any;
  public isPdf = false;
  public fileText!: string;
  public pdfBase64!: string;

  public fileErrorMessage!: string | null;
  private allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  public maxFileSize: number = 5 * 1024 * 1024;

  constructor(private fileUploadService: FileUploadService, private toastrService: ToastrService, private ngbModel: NgbModal, private authService: AuthService, private loaderService: LoaderService) { }
  ngOnInit(): void {
    this.getCredits();
  }

  fileSelected(event: Event): void {
    if (this.creditAvailable) {
      console.log("Available =? ", this.creditAvailable);
      this.files = (event.target as HTMLInputElement).files;
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
    } else {
      this.toastrService.error(`You don't have enough credits! Upgrade your package`, 'ERROR');
    }
  }
  convertFileToBase64(file: File): void {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (file.type.includes('pdf')) {
          this.filePreviewBase64 = '/assets/ocr-images/placeholder-pdf.png';
          this.pdfBase64 = reader.result as string;
          // console.log(this.pdfBase64);
          this.isPdf = true;
        } else {
          this.filePreviewBase64 = reader.result as string;
        }
      }
      reader.readAsDataURL(file);
    }
  }
  onUploadFile(): void {
    // console.log("Userdata => ", userdata);
    if (this.isFileSelected) {
      this.isUploading = true;
      this.toastrService.info('File uploading...', 'Wait');
      const formData = new FormData();
      formData.set("file", this.files[0]);
      this.subscription.push(this.fileUploadService.uploadFile(formData).subscribe({
        next: (res: DocumentResponseModel) => {
          this.fileText = res.data.ocr_text;
          this.isUploading = false;
          this.toastrService.success(res.message, 'Success');
        },
        error: (err: HttpErrorResponse) => {
          const errorMessage = err && err.error && err.error.message ? err.error.message : 'Something went wrong!';
          this.toastrService.error(errorMessage, 'Uploading error!');
          console.log("File uploading error ==>> ", err);
          this.removeSelectedFile();
        }
      }));
    }
  }
  removeSelectedFile(): void {
    this.filePreviewBase64 = null;
    this.isFileSelected = false;
    this.files = [];
    this.fileText = '';
    this.isPdf = false;
    this.isUploading = false;
    this.fileForm.reset();
    this.subscription.forEach(i => i.unsubscribe());
  }
  openPreview(fileUrl: string | null): void {
    if (this.isFileSelected) {
      const modelRef = this.ngbModel.open(FilePreviewComponent, { size: 'xl' });
      if (this.isPdf) {
        modelRef.componentInstance.fileUrl = this.pdfBase64.split(',')[1];
        modelRef.componentInstance.isPdf = this.isPdf;
      } else {
        modelRef.componentInstance.fileUrl = fileUrl;
      }
    }
  }
  getCredits(): any {
    this.subscription.push(this.fileUploadService.getCredits().subscribe({
      next: (res: CreditResponseModel) => {
        this.creditInfo = res.data;
        // console.log("Credits => ", this.creditInfo);
        if (this.creditInfo.avail_credit <= 0) {
          this.creditAvailable = false;
        } else {
          this.creditAvailable = true;
        }
      },
      error: (err) => {
        console.log("Credit error => ", err);
      }
    }));
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
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
