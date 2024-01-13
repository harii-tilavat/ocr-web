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
  public uploadingMessage!: string | null;
  public files!: any;
  public imageData!: string;
  public documentData!: any;

  constructor(private fileUploadService: FileUploadService, private toastrService: ToastrService) { }
  ngOnInit(): void {
    // this.getFileData();
  }
  getFileData(): any {
    this.fileUploadService.getFilesData().subscribe({
      next: (res) => {
        console.log("Response ===>>> ", res.documents);
        // this.filePreviewBase64 = res.documents[0].img_url;
        this.documentData = res.documents;
        this.imageData = res.documents[0].ocr_text;
        this.uploadingMessage = null;
      }, error: (err) => {
        console.log(err);
      }
    })
  }
  fileSelected(event: Event): void {
    this.files = (event.target as HTMLInputElement).files;
    if (this.files && this.files[0]) {
      this.uploadingMessage = 'File uploading... ';
      this.convertFileToBase64(this.files[0]);
      this.isFileSelected = true;
      this.toastrService.success('File uploading...', 'File');
      const formData = new FormData();
      formData.set("file", this.files[0]);
      this.fileUploadService.uploadFile(formData).subscribe({
        next: (res: any) => {
          console.log("Response: ", res);
          console.log("Uploading", this.uploadingMessage);
          this.getFileData();
        },
        error: (err) => { }
      })
      // this.fileUploadService.uploadFile(formData).subscribe({
      //   next: (res) => {
      //     console.log(res);
      //     this.toastrService.success(JSON.stringify(res));
      //   },
      //   error: (err) => {
      //     console.log(err);
      //     this.toastrService.error(err);
      //   }
      // });
      // console.log(this.fileForm);
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
  removeSelectedFile(): void {
    this.filePreviewBase64 = null;
    this.isFileSelected = false;
    this.files = [];
    this.imageData = '';
    this.uploadingMessage = '';
  }
}
