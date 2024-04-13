import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocumentModel, DocumentResponseModel } from 'src/app/_model';
import { AuthService, FileUploadService } from 'src/app/_services';
import { environment } from 'src/environments/environment';
import { UserProfileModel, pdfPlaceholder } from '../../../../_model/generic/generic.model';
import { PDFDocument, PDFPage } from 'pdf-lib';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { FileTypeEnum } from 'src/app/_enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {
  public subscription: Array<Subscription> = [];
  public pdfPlaceholder = pdfPlaceholder;
  public documentDetail!: DocumentModel;
  public isViewFull = false;
  public documentId!: string;
  public isPdf = false;
  public isJson = false;
  public isActive = false;
  public isLoading = false;
  public fileType!: FileTypeEnum;
  // public testPdf !: string;
  constructor(private router: Router, private route: ActivatedRoute, private fileUploadService: FileUploadService, private toastrService: ToastrService, private authService: AuthService) { }
  async ngOnInit(): Promise<any> {
    this.route.params.subscribe({
      next: (res: Params) => {
        this.isLoading = true;
        if (res && res['id']) {
          this.documentId = res['id'];
          console.log("Response => ", res);
          this.subscription.push(this.fileUploadService.getDocumentById(this.documentId).subscribe({
            next: async (res: DocumentResponseModel) => {
              if (res && res.data) {
                this.isLoading = false;
                this.documentDetail = res.data;
                this.documentDetail.image_url = environment.baseUrl + this.documentDetail.image_url;
                if (this.documentDetail.file_type.includes('pdf')) {
                  this.isPdf = true;
                } else {
                  // const data = await this.convertImageToPDF(this.documentDetail.image_url);
                  // console.log("Hello from image.", data);
                  // this.testPdf = data.split(',')[1];
                }
              }
            },
            error: (err: HttpErrorResponse) => {
              this.isLoading = false;
              this.toastrService.error(err.error.message, 'Error 404');
            }
          }));
        }
      }
    })
  }
  copyText(data: DocumentModel): void {
    if (this.isJson) {
      this.fileUploadService.copyTextClipbord(JSON.stringify(data));
    } else {
      this.fileUploadService.copyTextClipbord(data.ocr_text);
    }
  }
  goToBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onDownloadFile(type: string) {
    this.fileUploadService.downloadFile(this.documentDetail, type).subscribe({
      next: (res: any) => {
        console.log("File download response ", res);
        saveAs(res, this.documentDetail.file_name.split('.')[0]);
        this.toastrService.success('File dowloaded successfully! ', 'Success');
      }, error: (err) => {
        console.log("File dowload error => ", err);
        this.toastrService.error(err && err.error && err.error.message || 'File not exists', 'ERROR');
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
  // async convertImageToPDF(imageUrl: string): Promise<any> {
  //   // Load the image from the URL
  //   const imageBlob = await fetch(imageUrl).then(response => response.blob());
  //   // const imageBytes = await fetch(imageUrl).then(response => response.arrayBuffer());
  //   const imageBytes = await new Response(imageBlob).arrayBuffer();
  //   // Create a new PDF document
  //   const pdfDoc = await PDFDocument.create();

  //   // Add a new page to the PDF
  //   const page = pdfDoc.addPage();

  //   // Embed the image in the PDF
  //   const embeddedImage = await pdfDoc.embedPng(imageBytes);
  //   const { width, height } = embeddedImage.scale(0.5);
  //   page.drawImage(embeddedImage, {
  //     x: 0,
  //     y: 0,
  //     width,
  //     height,
  //   });

  //   // Serialize the PDF document to bytes
  //   const pdfBytes = await pdfDoc.save();
  //   const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

  //   // Convert Blob to Base64 string
  //   const reader = new FileReader();
  //   return new Promise<string>((resolve, reject) => {
  //     reader.onload = () => {
  //       const base64String = reader.result as string;
  //       resolve(base64String);
  //     };
  //     reader.onerror = reject;
  //     reader.readAsDataURL(pdfBlob);
  //   });

  // }
}
