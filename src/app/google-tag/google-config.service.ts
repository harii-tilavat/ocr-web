import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { GoogleTagConfig } from './google-tag-config';

export const GoogleTagManagerConfigService =
  new InjectionToken<GoogleTagConfig>('google-tag-config');

@Injectable({
  providedIn: 'root'
})
export class GoogleConfigService {
  private _googleTagManagerConfig: GoogleTagConfig = {
    id: null,
    gtm_auth: '',
    gtm_preview: '',
  };

  constructor(@Optional() @Inject(GoogleTagManagerConfigService) googleTagManagerConfig?: GoogleTagConfig) {
    if (googleTagManagerConfig) {
      this.set(googleTagManagerConfig);
    }
  }

  public set(googleTagManagerConfig: GoogleTagConfig): void {
    this._googleTagManagerConfig = googleTagManagerConfig;
  }

  public get(): GoogleTagConfig {
    return this._googleTagManagerConfig;
  }
}
