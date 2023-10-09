import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceHeadingComponent } from './resource-heading.component';

describe('ResourceHeadingComponent', () => {
  let component: ResourceHeadingComponent;
  let fixture: ComponentFixture<ResourceHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
