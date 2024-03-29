import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocumentModel, PricingCheckoutModel, PricingModel } from 'src/app/_model';
import { FileUploadService, LoaderService } from 'src/app/_services';
import { NgbModal } from '../ng-modal';
import { AlertBoxComponent } from '../basic/alert-box/alert-box.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];
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
  constructor(private fileUploadService: FileUploadService, private toastrService: ToastrService, private router: Router, private modalService: NgbModal, private loaderService: LoaderService) { }
  ngOnInit(): void {
  }
  async getStarted(planDetail: PricingModel): Promise<void> {
    // this.router.navigate(['/user']);
    if (planDetail.id === 1) {
      this.toastrService.info('Your current plan is free!', planDetail.planName);
      return;
    }
    if (!this.modalService.hasOpenModals()) {
      const modalRef = this.modalService.open(AlertBoxComponent, { size: 'md', backdrop: 'static', keyboard: false, centered: true, windowClass: 'alertbox', container: '#alertbox' });
      modalRef.componentInstance.title = '₹' + planDetail.price;
      modalRef.componentInstance.message = planDetail.planName;
      modalRef.componentInstance.icon = { name: 'bx bx-rupee' };
      modalRef.componentInstance.type = 'primary';
      modalRef.componentInstance.primeBtn = 'Buy now';
      const result = await modalRef.result;
      if (result) {
        this.loaderService.show();
        this.subscription.push(
          this.fileUploadService.purchasePlan(this.getPricingData(planDetail)).subscribe({
            next: (res) => {
              this.loaderService.hide();
              if (res && res.url) {
                window.open(res.url);
              }
            }, error: (err) => {
              console.log("ERROR => ", err);
              this.loaderService.hide();
            }
          })
        );
      }
    }
  }
  getPricingData(data: PricingModel): PricingCheckoutModel {
    return {
      items: [
        {
          name: data.planName,
          price: data.price,
          quantity: 1
        }
      ]
    };
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }

}
