import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GenericResponseList, GenericResponseType } from 'src/app/_model';
import { NuggetService } from 'src/app/_services';

@Component({
  selector: 'app-share-article',
  templateUrl: './share-article.component.html',
  styleUrls: ['./share-article.component.scss']
})
export class ShareArticleComponent implements OnInit {
  public hoverIndex: any = null;
  public iconList = [
    {
      id: 1,
      icon: 'linkedin'
    },
    {
      id: 2,
      icon: 'x'
    },
    {
      id: 2,
      icon: 'link'
    },
  ]
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
    // const headerHeight = (document.getElementById('top-header') as HTMLElement).offsetHeight;
    // console.log("Header Height: ", headerHeight);
  }
  mouseEnter(index: number): void {
    this.hoverIndex = index;
  }
  mouseLeave(): void {
    this.hoverIndex = null;
  }
}
