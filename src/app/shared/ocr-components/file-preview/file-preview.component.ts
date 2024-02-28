import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss']
})
export class FilePreviewComponent implements OnInit {
  public fileUrl!: string;
  public isPdf = false;
  ngOnInit(): void {
    console.log(this.fileUrl);
  }
}
