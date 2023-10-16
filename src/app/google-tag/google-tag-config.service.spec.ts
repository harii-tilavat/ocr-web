import { TestBed } from '@angular/core/testing';

import { GoogleTagConfigService } from './google-tag-config.service';

describe('GoogleTagConfigService', () => {
  let service: GoogleTagConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleTagConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
