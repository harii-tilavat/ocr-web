import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamsModel } from 'src/app/_model';
import { NuggetService, DataCacheService } from 'src/app/_services';
import { GlobalEventifier } from 'src/app/_eventifier';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];
  public teamList: Array<TeamsModel> = [];
  constructor(private nuggetService: NuggetService, private dataCacheService: DataCacheService, private globalEventifier: GlobalEventifier) { }
  ngOnInit(): void {
    this.subscription.push(
      this.globalEventifier.$teamList.subscribe((res: TeamsModel[]) => {
        if (res) {
          this.teamList = res;
        } else {
          this.teamList = [];
        }
      })
    )
  }
  openJobSection(): void {
    window.open('https://www.linkedin.com/company/userstudy/jobs/')
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }

}
