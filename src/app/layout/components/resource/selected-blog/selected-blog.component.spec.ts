import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBlogComponent } from './selected-blog.component';

describe('SelectedBlogComponent', () => {
  let component: SelectedBlogComponent;
  let fixture: ComponentFixture<SelectedBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
