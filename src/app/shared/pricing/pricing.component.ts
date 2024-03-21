import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FileUploadService } from 'src/app/_services';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(private fileUploadService: FileUploadService, private toastrService: ToastrService, private router: Router) { }
  ngOnInit(): void {
  }
  getStarted(): void {

    this.router.navigate(['/user']);
  }
}
