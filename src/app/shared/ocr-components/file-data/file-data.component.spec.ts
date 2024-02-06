import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDataComponent } from './file-data.component';

describe('FileDataComponent', () => {
  let component: FileDataComponent;
  let fixture: ComponentFixture<FileDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
