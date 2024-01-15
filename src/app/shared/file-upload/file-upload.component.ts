import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { FileUploadService } from 'src/app/_services';

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
  public documentData!: any;

  constructor(private fileUploadService: FileUploadService, private toastrService: ToastrService) { }
  ngOnInit(): void {
    // this.getFileData();
  }
  getFileData(): any {
    this.isUploading = true;
    this.fileUploadService.getFilesData().subscribe({
      next: (res) => {
        // this.filePreviewBase64 = res.documents[0].img_url;
        if (res.documents.length) {
          this.documentData = res.documents;
          console.log("Response ===>>> ", this.documentData);
          this.fileText = res.documents[0].ocr_text;
        }
        this.isUploading = false;
      }, error: (err) => {
        console.log("File getting error ==>> ", err);
        debugger;
        // this.removeSelectedFile();
      }
    })
  }
  fileSelected(event: Event): void {
    this.files = (event.target as HTMLInputElement).files;
    console.log("Files ==>> ", this.files);
    if (this.files && this.files[0]) {
      this.convertFileToBase64(this.files[0]);
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
    console.log("Files ==>> ",this.files);
    if (this.files && this.files[0]) {
      this.toastrService.success('File uploading...', 'File');
      this.isUploading = true;
      const formData = new FormData();
      formData.set("file", this.files[0]);
      this.fileUploadService.uploadFile(formData).subscribe({
        next: (res: any) => {
          console.log("Response: ", res);
          this.getFileData();
        },
        error: (err: HttpErrorResponse) => {
          this.toastrService.error(err.error.error, 'Uploading error!');
          console.log("File uploading error ==>> ", err);
          this.removeSelectedFile();
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
  }
}
