import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrWebcamComponent } from './ocr-webcam.component';

describe('OcrWebcamComponent', () => {
  let component: OcrWebcamComponent;
  let fixture: ComponentFixture<OcrWebcamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OcrWebcamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OcrWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
