import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { LoaderState } from './loader';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new BehaviorSubject<LoaderState>({ show: false });
  $loaderSubject = this.loaderSubject.asObservable();

  private loaderSubjectTable = new BehaviorSubject<LoaderState>({ show: false });
  $loaderSubjectTable = this.loaderSubjectTable.asObservable();

  constructor() { }
  show() {
    this.loaderSubject.next({ show: true } as LoaderState);
  }
  hide() {
    this.loaderSubject.next({ show: false } as LoaderState);
  }

  showTable() {
    this.loaderSubjectTable.next({ show: true } as LoaderState);
  }
  hideTable() {
    this.loaderSubjectTable.next({ show: false } as LoaderState);
  }
}
