import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-detail',
  templateUrl: './privacy-detail.component.html',
  styleUrls: ['./privacy-detail.component.scss']
})
export class PrivacyDetailComponent implements OnInit {
  @Input() privacyList: any;
  constructor() { }
  ngOnInit(): void {
  }

}
