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
  public metaData: any = [];
  public documents: any = [];

  constructor(private fileUploadService: FileUploadService, private toastrService: ToastrService) { }
  ngOnInit(): void {
    this.getAllDocuments();
  }
  getAllDocuments(): any {
    this.fileUploadService.getAllDocuments().subscribe({
      next: (res) => {
        if (res.documents.length) {
          this.documents = res.documents;
          console.log("Response ===>>> ", this.documents);
        }
      }, error: (err) => {
        console.log("File getting error ==>> ", err);
        this.removeSelectedFile();
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

    if (this.files && this.files[0]) {
      this.isUploading = true;
      this.toastrService.info('File uploading...', 'Wait');
      const formData = new FormData();
      formData.set("file", this.files[0]);
      this.fileUploadService.uploadFile(formData).subscribe({
        next: (res: any) => {
          console.log("Response: ", res);
          this.fileText = res.ocr_text;
          this.metaData = res.meta;
          this.isUploading = false;
          this.toastrService.success('Data fetched! ', 'Success');
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
  onDeleteDocument(id: number): void {

    this.fileUploadService.deleteDocument(id).subscribe({
      next: (res: any) => {
        console.log(res.message);
        this.getAllDocuments();
        this.toastrService.success(res.message,'Success');
      }, error: (err:HttpErrorResponse) => {
        console.log("Delete Error ==>> ", err);
        this.toastrService.success(err.error.error,'Error');
      }
    })
  }
  removeSelectedFile(): void {
    this.filePreviewBase64 = null;
    this.isFileSelected = false;
    this.files = [];
    this.fileText = '';
    this.isUploading = false;
  }
}
