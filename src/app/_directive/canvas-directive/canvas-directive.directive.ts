import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCanvasDirective]'
})
export class CanvasDirectiveDirective implements OnInit {
  @Input() playrUrl!: string;
  @Input() type = 'MEDIA';
  public canvas!: HTMLCanvasElement;
  public ctx!: CanvasRenderingContext2D;
  public video!: HTMLVideoElement;
  public playerId = 'xxxx-xxxx-xxxx-xxxx'.replace(/x/g, () => Math.floor(Math.random() * 16).toString(16));
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // let mediaType = '.mp4';
    // if (this.type === 'WEBP') {
    //   mediaType = '.webp';
    // }
    this.initCanvas();
  }
  initCanvas(): void {
    this.canvas = (this.el.nativeElement as HTMLCanvasElement);
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.video = this.renderer.createElement('video') as HTMLVideoElement;
    this.video.src = this.playrUrl;
    this.video.muted = true;
    this.video.loop = true;
    this.video.id = this.playerId;
    this.video.controls = false;
    this.video.addEventListener('loadeddata', async () => {
      this.video.setAttribute('allow', 'autoplay');
      this.video.setAttribute("autoplay", "true");
      this.video.setAttribute("preload", "none");
      this.video.setAttribute("allowfullscreen", 'false');
      await this.video.play();
      if (this.ctx) {
        this.canvas.width = this.video.videoWidth;
        this.canvas.height = this.video.videoHeight;
        this.drawFrame();
      }
    });
    // this.video.setAttribute('playsinline', 'playsinline');
  }
  drawFrame = () => {
    if (this.ctx) {
      this.ctx.drawImage(this.video, 0, 0);
      requestAnimationFrame(() => this.drawFrame());
    }
  }

}
