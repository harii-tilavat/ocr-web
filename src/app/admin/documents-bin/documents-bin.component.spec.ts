import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsBinComponent } from './documents-bin.component';

describe('DocumentsBinComponent', () => {
  let component: DocumentsBinComponent;
  let fixture: ComponentFixture<DocumentsBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentsBinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentsBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
