import { TestBed } from '@angular/core/testing';

import { OcrIntercepterService } from './ocr-intercepter.service';

describe('OcrIntercepterService', () => {
  let service: OcrIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcrIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
