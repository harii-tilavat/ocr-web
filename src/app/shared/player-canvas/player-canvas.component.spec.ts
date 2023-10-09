import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCanvasComponent } from './player-canvas.component';

describe('PlayerCanvasComponent', () => {
  let component: PlayerCanvasComponent;
  let fixture: ComponentFixture<PlayerCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
