import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DocumentModel, DocumentResponseModel } from 'src/app/_model';
import { FileUploadService } from 'src/app/_services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {
  public documentDetail!: DocumentModel;
  public documentId!: string;
  public isPdf = false;
  public isJson = false;
  public isActive = false;
  public isLoading = false;
  constructor(private router: Router, private route: ActivatedRoute, private fileUploadService: FileUploadService) { }
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (res: Params) => {
        this.isLoading = true;
        if (res && res['id']) {
          this.documentId = res['id'];
          console.log("Response => ", res);
          this.fileUploadService.getDocumentById(this.documentId).subscribe({
            next: (res: DocumentResponseModel) => {
              if (res && res.data) {
                this.isLoading = false;
                this.documentDetail = res.data;
                this.documentDetail.image_url = environment.baseUrl + this.documentDetail.image_url;
                if (this.documentDetail.file_type.includes('pdf')) {
                  this.isPdf = true;
                }
              }
            }
          })
        }
      }
    })
  }
  goToBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
