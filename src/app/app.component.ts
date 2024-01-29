import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, map, pipe } from 'rxjs';
import { TitleService } from './_services';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { BlogListResponseModel, GenericResponseList, ReviewList, TeamsModel } from './_model';
import { NuggetService, DataCacheService } from './_services';
import { GlobalEventifier } from './_eventifier';
import { GoogleTagConfigService } from './google-tag/google-tag-config.service';
import { AuthService } from './_services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'nugget-web';
  public isNavWhite = false;
  public subscription: Array<Subscription> = [];
  public isLoggedIn = false;

  constructor(private readonly router: Router, private activatedRoute: ActivatedRoute, private readonly titleService: TitleService,
    private nuggetService: NuggetService, private dataCacheService: DataCacheService, private globalEventifier: GlobalEventifier, private googleTagConfigService: GoogleTagConfigService, private authServiceL: AuthService) {

  }
  ngOnInit(): void {
    this.isLoggedIn = this.authServiceL.isUserLoggedIn();
    this.authServiceL.currentUserSubject.subscribe({
      next: (res: any) => {
        console.log("Response ==>> ", res);
      }
    })
    const appTitle = this.titleService.getTitle();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(() => {
      let child = this.activatedRoute.firstChild as ActivatedRoute;
      while (child.firstChild) { child = child.firstChild; }
      if (child.snapshot.data['title']) { return child.snapshot.data['title']; }
      return appTitle;
    })
    ).subscribe((ttl: string) => {
      this.isNavWhite = ttl.includes('Teams') ? true : false;
      this.titleService.setTitle(ttl);
      const gtmTag = {
        event: 'page',
        pageName: this.router.url
      };
      this.googleTagConfigService.pushTag(gtmTag);
    });
    // this.subscription.push(this.dataCacheService.getData('TEAM').subscribe((res: TeamsModel[]) => {
    //   if (res) {
    //     this.globalEventifier.teamListEvent(res);
    //   }
    //   this.getTeamMembers();
    // }))
    // this.subscription.push(this.dataCacheService.getData('REVIEW').subscribe((res: ReviewList[]) => {
    //   if (res) {
    //     this.globalEventifier.reviewListEvent(res);
    //   }
    //   this.getReviewList();
    // }))
    // this.getAllBlog();
  }

  // private getTeamMembers(): void {
  //   this.subscription.push(
  //     this.nuggetService.getTeams().subscribe({
  //       next: (res: GenericResponseList<TeamsModel[]>) => {
  //         if (res && res.data) {
  //           this.dataCacheService.storeData('TEAM', res.data);
  //           this.globalEventifier.teamListEvent(res.data);
  //         }
  //       }
  //     })
  //   )
  // }
  // private getReviewList(): void {
  //   this.subscription.push(
  //     this.nuggetService.getReviewList().subscribe({
  //       next: (res: GenericResponseList<Array<ReviewList>>) => {
  //         if (res.data) {
  //           this.dataCacheService.storeData('REVIEW', res.data);
  //           this.globalEventifier.reviewListEvent(res.data);
  //         }
  //       }, error: () => {

  //       }
  //     })
  //   )
  // }
  // private getAllBlog(): void {
  //   const request = { page: 1, pageSize: 10 };
  //   this.subscription.push(this.nuggetService.getAllBlogList(request).subscribe({
  //     next: (res: GenericResponseList<BlogListResponseModel>) => {
  //       if (res.data && res.data.blogList) { this.dataCacheService.storeData('BLOG', res.data); }
  //     }, error: () => {
  //     }
  //   }))
  // }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
