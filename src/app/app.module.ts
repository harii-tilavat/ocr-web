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
import { BaseProviderService } from './_services/base-provider.service';
import { OcrIntercepterService } from './_services';
import { JWT_OPTIONS, JwtModule } from 'src/package/jwt-token';

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => (localStorage.getItem('token') ? localStorage.getItem('token') : null),
    userProfileGetter: () => (localStorage.getItem('userProfile') ? localStorage.getItem('userProfile') : null)
  };
}

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
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      }
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
