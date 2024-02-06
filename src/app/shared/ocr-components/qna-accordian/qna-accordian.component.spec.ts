import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnaAccordianComponent } from './qna-accordian.component';

describe('QnaAccordianComponent', () => {
  let component: QnaAccordianComponent;
  let fixture: ComponentFixture<QnaAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnaAccordianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QnaAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
