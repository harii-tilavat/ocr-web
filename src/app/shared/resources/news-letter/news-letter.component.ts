import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GenericResponseList, GenericResponseType } from 'src/app/_model';
import { NuggetService } from 'src/app/_services';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent implements OnInit, OnDestroy {
  private subscription: Array<Subscription> = [];
  public newsForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required])
  })
  constructor(private nuggetService: NuggetService, private toastrService: ToastrService) {

  }

  newsLetterSubscribe(): void {
    if (this.newsForm.valid) {
      this.subscription.push(
        this.nuggetService.createNewsLetter(this.newsForm.value).subscribe({
          next: (res: GenericResponseList<GenericResponseType>) => {
            if (res && res.success) {
              this.newsForm.reset();
              this.toastrService.success(res.message);
            }
          },
          error: () => {

          }
        })
      )
    } else {
      this.newsForm.markAllAsTouched();
    }
  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
  }

}
