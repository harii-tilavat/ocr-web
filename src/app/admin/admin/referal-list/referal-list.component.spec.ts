import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalListComponent } from './referal-list.component';

describe('ReferalListComponent', () => {
  let component: ReferalListComponent;
  let fixture: ComponentFixture<ReferalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferalListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
