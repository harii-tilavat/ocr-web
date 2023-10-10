import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NuggetService } from 'src/app/_services';

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
  constructor(private nuggetService: NuggetService) { }

  ngOnInit(): void {
    if (this.playerPath.includes('.mp4')) {
      this.nuggetService.getBlobContext('/assets/media/' + this.playerPath).subscribe({
        next: (res: Blob) => {
          this.blobUrl = URL.createObjectURL(res);
          console.log(this.playerPath, res, this.blobUrl);
        }
      })
      // fetch('/assets/images/' + this.playerPath).then(res => res.blob()).then((res) => {
      //   console.log(this.playerPath, res);
      // })
    }
  }
  ngOnDestroy(): void {
  }

}
