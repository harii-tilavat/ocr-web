import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GlobalEventifier } from 'src/app/_eventifier';
import { DocumentProccessDetail, OcrServiceModel } from 'src/app/_model';
import { FileUploadService } from 'src/app/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {
  public ocrServices: Array<OcrServiceModel> = [
    {
      id: 1,
      title: 'Upload Documents',
      subTitle: 'Effortless Document Management',
      desc: 'Easily upload various document formats, including images and pdf files. Streamline your workflow with our intuitive document upload feature.',
      imagePath: 'home-page-1',
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
      imagePath: 'home-page-3',
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
  public qnaList = [
    {
      id: 1,
      title: 'How does OCRWeb work?',
      desc: 'OCRWeb works on OCR technology that leverages AI & ML capabilities. OCR (Optical Character Recognition) is a popular technology that converts any kind of text or information stored in digital documents into machine-readable data. Hard copies and paper documents can thus be converted into computer-readable file formats, suitable for further editing or data processing.'
    },
    {
      id: 2,
      title: 'Why do I need OCR to extract data?',
      desc: 'OCR (Optical Character Recognition) is essential for data extraction from documents as it automates the conversion of images or scanned documents into editable and searchable text.'
    },
    {
      id: 3,
      title: 'Is this tool free to use?',
      desc: 'OCRWeb Online OCR is completely free-to-use. OCRWeb offers a range of capabilities to automate data capture from invoices, receipts, and other common document workflows.'
    }
  ]
  public subscription: Array<Subscription> = [];
  constructor(private globalEventifier: GlobalEventifier, private fileUploadService: FileUploadService, private toastrService: ToastrService) {
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}
