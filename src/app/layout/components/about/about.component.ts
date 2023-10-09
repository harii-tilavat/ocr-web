import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenericResponseList, TeamsModel } from 'src/app/_model';
import { NuggetService } from 'src/app/_services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];
  public teamList: Array<TeamsModel> = [];
  constructor(private nuggetService: NuggetService) { }
  ngOnInit(): void {
    this.subscription.push(this.nuggetService.getTeams().subscribe({
      next: (res: GenericResponseList<Array<TeamsModel>>) => {
        if (res.data) {
          this.teamList = res.data;
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log("ERROR: ", err);
      }
    }));

  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }

}
