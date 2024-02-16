import { ToastrService } from 'ngx-toastr';
import { NuggetService } from 'src/app/_services';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MenuListModel, menuConfig } from 'src/app/_model/menu-list/menu-list.model';
import { GenericResponseList, GenericResponseType } from 'src/app/_model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  @Input() themeColor = '#b42318';
  public subscription: Array<Subscription> = [];
  public year = new Date().getFullYear();
  public menuList: { title: string, routing: string }[] = [
    { title: 'Home', routing: '/' },
    { title: 'About', routing: '/about' },
    { title: 'Contact', routing: '/contact' },
    { title: 'Docs', routing: '/docs' },
    { title: 'Start OCR', routing: '/upload' },
    // { title: 'OC', routing: '/blog' },
  ];
  // { title: 'Customer stories', routing: '/resources' },
  public enquiryForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required])
  })
  constructor(private nuggetService: NuggetService, private toastrService: ToastrService) {

  }
  ngOnInit(): void {
  }
  emailSubmit(): void {

  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
