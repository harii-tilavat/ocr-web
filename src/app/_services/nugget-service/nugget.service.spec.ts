import { TestBed } from '@angular/core/testing';

import { NuggetService } from './nugget.service';

describe('NuggetService', () => {
  let service: NuggetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuggetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
