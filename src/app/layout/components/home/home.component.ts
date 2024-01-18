import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GlobalEventifier } from 'src/app/_eventifier';
import { FileUploadService } from 'src/app/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];
  constructor(private globalEventifier: GlobalEventifier, private fileUploadService: FileUploadService, private toastrService: ToastrService) {
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

}
