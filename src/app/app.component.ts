import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, map } from 'rxjs';
import { TitleService } from './_services';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'nugget-web';
  public isNavWhite = false;
  public subscription: Array<Subscription> = [];

  constructor(private readonly router: Router, private activatedRoute: ActivatedRoute, private readonly titleService: TitleService) {

  }
  ngOnInit(): void {
    const appTitle = this.titleService.getTitle();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(() => {
      let child = this.activatedRoute.firstChild as ActivatedRoute;
      while (child.firstChild) { child = child.firstChild; }
      if (child.snapshot.data['title']) { return child.snapshot.data['title']; }
      return appTitle;
    })).subscribe((ttl: string) => {
      this.isNavWhite = ttl.includes('Teams') ? true : false;
      this.titleService.setTitle(ttl);
    });
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
