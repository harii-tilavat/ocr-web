import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvToJsonComponent } from './csv-to-json.component';

describe('CsvToJsonComponent', () => {
  let component: CsvToJsonComponent;
  let fixture: ComponentFixture<CsvToJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsvToJsonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsvToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
