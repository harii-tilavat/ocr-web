import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GlobalEventifier } from 'src/app/_eventifier';
import { FileUploadService } from 'src/app/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public fileForm: FormGroup = new FormGroup({
    file: new FormControl('', [Validators.required])
  })
  public subscription: Array<Subscription> = [];
  public progress!: number;
  public filePreviewBase64!: string | null;
  public isFileSelected = false;
  public uploading!: number;
  public files!: any;
  public imageData!: string;
  constructor(private globalEventifier: GlobalEventifier, private fileUploadService: FileUploadService, private toastrService: ToastrService) {
  }
  ngOnInit(): void {
    this.getFileData();
  }
  fileSelected(event: Event): void {
    this.files = (event.target as HTMLInputElement).files;
    if (this.files && this.files[0]) {
      this.convertFileToBase64(this.files[0]);
      this.isFileSelected = true;
      this.toastrService.success('File uploading...', 'File');

      const formData = new FormData();
      formData.set("file", this.files[0]);

      this.fileUploadService.uploadFile(formData).subscribe({
        next: (res: any) => {
          this.uploading = res.uploading;
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
  getFileData(): void {
    this.fileUploadService.getData().subscribe({
      next: (res) => {
        console.log("Response: ", res);
        this.imageData = res.data;
      }, error: (err) => {
        console.log(err);
      }
    })
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
  }
  ngOnDestroy(): void {
  }

}
