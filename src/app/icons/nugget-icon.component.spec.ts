import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuggetIconComponent } from './nugget-icon.component';

describe('NuggetIconComponent', () => {
  let component: NuggetIconComponent;
  let fixture: ComponentFixture<NuggetIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuggetIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuggetIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
