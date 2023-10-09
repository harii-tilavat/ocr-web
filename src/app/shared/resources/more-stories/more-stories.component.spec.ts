import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreStoriesComponent } from './more-stories.component';

describe('MoreStoriesComponent', () => {
  let component: MoreStoriesComponent;
  let fixture: ComponentFixture<MoreStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
