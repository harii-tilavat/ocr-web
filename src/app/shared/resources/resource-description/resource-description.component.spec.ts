import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDescriptionComponent } from './resource-description.component';

describe('ResourceDescriptionComponent', () => {
  let component: ResourceDescriptionComponent;
  let fixture: ComponentFixture<ResourceDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
