import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { IconsModule } from './icons/icons.module';
import { register } from 'swiper/element/bundle';

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { DataCacheService } from './_services/cache-service/data-cache.service';
import { GlobalEventifier } from './_eventifier';
import { GoogleTagModule } from './google-tag/google-tag.module';

register();
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    IconsModule,
    GoogleTagModule.forRoot({
      id: 'G-TQ12FM5HXS'
    }),
    ToastrModule.forRoot({
      progressBar: false,
      easing: 'ease-in',
      timeOut: 3000,
      closeButton: true
    })],
  providers: [
    ToastrService,
    GlobalEventifier,
    DataCacheService,
    { provide: 'googleTagManagerCSPNonce', useValue: 'CSP-NONCE' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
