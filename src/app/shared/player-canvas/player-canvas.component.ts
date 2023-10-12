import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-player-canvas',
  templateUrl: './player-canvas.component.html',
  styleUrls: ['./player-canvas.component.scss']
})
export class PlayerCanvasComponent implements OnInit, OnDestroy {
  @Input() playerPath!: string;
  @Input() type = 'MEDIA';
  public canvasId = 'xxxx-xxxx-xxxx-xxxx'.replace(/x/g, () => Math.floor(Math.random() * 16).toString(16));
  public blobUrl = null as unknown as string;
  constructor() { }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
  }

}
