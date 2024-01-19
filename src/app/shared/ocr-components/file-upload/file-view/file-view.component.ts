import { Component, OnInit } from '@angular/core';
import { DocumentModel } from 'src/app/_model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.scss']
})
export class FileViewComponent implements OnInit {
  public modelData!: DocumentModel;
  public isJson = false;
  public isActive = false;
  constructor() { }
  ngOnInit(): void {
    this.modelData.image_url = environment.baseUrl + this.modelData.image_url;
  }
}
