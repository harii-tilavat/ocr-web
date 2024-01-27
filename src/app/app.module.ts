import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { IconsModule } from './icons/icons.module';
import { register } from 'swiper/element/bundle';

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DataCacheService } from './_services/cache-service/data-cache.service';
import { GlobalEventifier } from './_eventifier';
import { GoogleTagModule } from './google-tag/google-tag.module';
import { BaseProviderService } from './_services/base-provider.service';
import { OcrIntercepterService } from './_services';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';


register();
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    IconsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
      }
    }),
    GoogleTagModule.forRoot({
      id: 'G-TQ12FM5HXS'
    }),
    ToastrModule.forRoot({
      progressBar: true,
      easing: 'ease-in',
      timeOut: 2500,
      closeButton: true
    })],
  providers: [
    ToastrService,
    GlobalEventifier,
    DataCacheService,
    BaseProviderService,
    { provide: 'googleTagManagerCSPNonce', useValue: 'CSP-NONCE' },
    { provide: HTTP_INTERCEPTORS, useClass: OcrIntercepterService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
