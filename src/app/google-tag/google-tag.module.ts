import { NgModule, ModuleWithProviders } from '@angular/core';
import { GoogleTagManagerConfigService } from './google-config.service';
import { GoogleTagConfig } from './google-tag-config';



@NgModule()
export class GoogleTagModule {
  public static forRoot(
    config?: GoogleTagConfig
  ): ModuleWithProviders<GoogleTagModule> {
    return {
      ngModule: GoogleTagModule,
      providers: [{ provide: GoogleTagManagerConfigService, useValue: config }],
    };
  }
}
