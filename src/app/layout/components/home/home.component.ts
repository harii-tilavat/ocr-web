import { Component, OnInit, OnDestroy, } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GlobalEventifier } from 'src/app/_eventifier';
import { DocumentProccessDetail, OcrServiceModel } from 'src/app/_model';
import { FileUploadService } from 'src/app/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public ocrServices: Array<OcrServiceModel> = [
    {
      id: 1,
      title: 'Upload Documents',
      subTitle: 'Effortless Document Management',
      desc: 'Easily upload various document formats, including images and pdf files. Streamline your workflow with our intuitive document upload feature.',
      imagePath: 'home-page-3',
      subMenu: []
    },
    {
      id: 2,
      title: 'Automated Processing',
      subTitle: 'Efficiency at its Best',
      desc: 'Our system automatically processes and organizes your uploaded documents for efficient handling. Experience seamless automation to boost productivity.',
      imagePath: 'home-page-2',
      subMenu: []
    },
    {
      id: 3,
      title: 'Access Processed Data',
      subTitle: 'Intuitive Data Retrieval',
      desc: 'Retrieve and view the organized data through a user-friendly interface with search and filter capabilities. Effortlessly find and analyze your processed data.',
      imagePath: 'home-page-1',
      subMenu: []
    },
  ];
  public processDetail: Array<DocumentProccessDetail> = [
    {
      id: 1,
      title: 'Upload Images or PDF Files',
      desc: 'Select files from your computer, or just drag and drop into the upload box.'
    },
    {
      id: 2,
      title: 'Convert to text',
      desc: 'Our online OCR tool automatically recognizes content in your files and converts it into editable text.'
    },
    {
      id: 3,
      title: 'Download text file',
      desc: 'Retrieve and view the organized data through a user-friendly interface with search and filter capabilities.'
    },
  ];

  public subscription: Array<Subscription> = [];
  constructor(private globalEventifier: GlobalEventifier, private fileUploadService: FileUploadService, private toastrService: ToastrService, private router:Router) {
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  startOCR():void{
    this.router.navigate(['/upload']);
  }
}
