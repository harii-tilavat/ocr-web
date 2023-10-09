import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyDetailComponent } from './privacy-detail.component';

describe('PrivacyDetailComponent', () => {
  let component: PrivacyDetailComponent;
  let fixture: ComponentFixture<PrivacyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
