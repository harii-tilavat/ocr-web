import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePdfComponent } from './create-pdf.component';

describe('CreatePdfComponent', () => {
  let component: CreatePdfComponent;
  let fixture: ComponentFixture<CreatePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
