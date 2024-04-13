import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DocumentResponseModel } from 'src/app/_model';
import { AuthService, FileUploadService } from 'src/app/_services';
import { NgbModal } from 'src/app/shared/ng-modal';

@Component({
  selector: 'app-wallet',

  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit, OnDestroy {
  public creditInfo: any;
  public subscription: Array<Subscription> = [];
  constructor(private modalService: NgbModal, private fileUploadService: FileUploadService, private toastrService: ToastrService, private authService: AuthService) { }
  ngOnInit(): void {
    this.subscription.push(this.fileUploadService.getCredits().subscribe({
      next: (res: DocumentResponseModel) => {
        this.creditInfo = res.data;
      },
      error: (err) => {
        console.log("ERRORROR => ", err);
      }
    }));
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }

}
