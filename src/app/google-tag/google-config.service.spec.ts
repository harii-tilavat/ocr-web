import { TestBed } from '@angular/core/testing';

import { GoogleConfigService } from './google-config.service';

describe('GoogleConfigService', () => {
  let service: GoogleConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
