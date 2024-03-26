import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDetailComponent } from './credit-detail.component';

describe('CreditDetailComponent', () => {
  let component: CreditDetailComponent;
  let fixture: ComponentFixture<CreditDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
