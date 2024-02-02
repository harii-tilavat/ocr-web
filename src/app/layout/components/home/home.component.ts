import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GlobalEventifier } from 'src/app/_eventifier';
import { DocumentProccessDetail } from 'src/app/_model';
import { FileUploadService } from 'src/app/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {
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
  ]
  public subscription: Array<Subscription> = [];
  constructor(private globalEventifier: GlobalEventifier, private fileUploadService: FileUploadService, private toastrService: ToastrService) {
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}
