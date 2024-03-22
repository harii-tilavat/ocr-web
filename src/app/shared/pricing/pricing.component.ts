import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocumentModel, PricingModel } from 'src/app/_model';
import { FileUploadService } from 'src/app/_services';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  public pricingList: PricingModel[] = [
    {
      id: 1,
      planName: 'Free',
      fileStorage: true,
      downloadText: true,
      downloadWord: false,
      getJson: false,
      exportExcel: false,
      maxCredits: 5,
      price: 0,
      viewPdf: false
    },
    {
      id: 2,
      planName: 'Pro',
      fileStorage: true,
      downloadText: true,
      downloadWord: true,
      getJson: true,
      exportExcel: false,
      maxCredits: 50,
      price: 199,
      viewPdf: false
    },
    {
      id: 3,
      planName: 'Ultra pro max',
      fileStorage: true,
      downloadText: true,
      downloadWord: true,
      getJson: true,
      exportExcel: true,
      maxCredits: -1,
      price: 599,
      viewPdf: true
    },
  ]
  constructor(private fileUploadService: FileUploadService, private toastrService: ToastrService, private router: Router) { }
  ngOnInit(): void {
  }
  getStarted(plan: string): void {
    this.toastrService.info('We will add this functionality soon!', plan + ' Plan');
    // this.router.navigate(['/user']);
  }
}
