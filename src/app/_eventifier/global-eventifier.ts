import { TeamsModel } from './../_model/teams-of-shapes/teams-of-shapes.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReviewList } from '../_model';
@Injectable()
export class GlobalEventifier {
  constructor() {

  }

  protected readonly teamListInit: Array<TeamsModel> = [];
  private teamList = new BehaviorSubject<TeamsModel[]>(this.teamListInit);
  $teamList = this.teamList.asObservable();

  protected readonly reviewListInit: Array<ReviewList> = [];
  private reviewList = new BehaviorSubject<ReviewList[]>(this.reviewListInit);
  $reviewList = this.reviewList.asObservable();

  teamListEvent(teamLists: TeamsModel[]) {
    this.teamList.next(teamLists);
  }

  reviewListEvent(reviewLists: ReviewList[]) {
    this.reviewList.next(reviewLists);
  }
}
