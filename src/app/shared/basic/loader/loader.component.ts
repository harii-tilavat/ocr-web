
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/_services';
import { LoaderState } from 'src/app/_services/loaderservice/loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() public isLoadingProggress = false;
  @Input() public uploadinProggress = 0;
  public show!: boolean;
  private subscription!: Subscription;
  constructor(public loaderService: LoaderService) { }
  ngOnInit() {
    this.subscription = this.loaderService.$loaderSubject.subscribe((state: LoaderState) => {
      this.show = state.show;
    });

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
