import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DocumentResponseModel } from 'src/app/_model';
import { AuthService, FileUploadService } from 'src/app/_services';
import { NgbModal } from 'src/app/shared/ng-modal';

@Component({
  selector: 'app-wallet',

  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  public creditInfo: any;
  constructor(private modalService: NgbModal, private fileUploadService: FileUploadService, private toastrService: ToastrService, private authService: AuthService) { }
  ngOnInit(): void {
    this.fileUploadService.getCredits().subscribe({
      next: (res: DocumentResponseModel) => {
        this.creditInfo = res.data;
        console.log("Credits => ", this.creditInfo);
      },
      error: (err) => {
        console.log("ERRORROR => ", err);
      }
    })
  }
}
