import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})
export class DocumentUploadComponent implements OnInit {
  public documentInfo = [
    {
      id: 1,
      title: 'Free to use.'
    },
    {
      id: 2,
      title: 'Supports different types of files (PNG, JPG, JPEG, PDF).'
    },
    {
      id: 3,
      title: 'Takes just a few seconds. Save your time'
    },
    {
      id: 4,
      title: 'Processing is easy for a smooth experience.'
    },
    {
      id: 5,
      title: 'Easily copy and download text files.'
    },
  ]
  constructor() { }
  ngOnInit(): void {
  }

}
