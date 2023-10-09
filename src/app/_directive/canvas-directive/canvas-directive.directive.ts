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
    if (this.playrUrl.includes('.mp4')) {
      this.video = this.renderer.createElement('video') as HTMLVideoElement;
      this.video.src = `/assets/gif/${this.playrUrl}`; // ${mediaType}
      this.video.autoplay = true;
      this.video.muted = true;
      this.video.loop = true;
      this.video.setAttribute('allow', 'autoplay');
      // Once the video is loaded, draw it on the canvas
      this.video.addEventListener('loadeddata', async () => {
        if (this.ctx) {
          this.canvas.width = this.video.videoWidth;
          this.canvas.height = this.video.videoHeight;
          this.drawFrame();
        }
      });
      this.video.play();
    } else {
      this.drawImage(this.playrUrl);
    }
  }
  async drawImage(url: string): Promise<void> {
    // const blob = await fetch(url).then(r => r.blob());
    const img = new Image();
    img.onload = () => {
      // Draw the image on the canvas
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
    };
    img.src = url;
  }
  drawFrame = () => {
    if (this.ctx) {
      this.ctx.drawImage(this.video, 0, 0);
      requestAnimationFrame(() => this.drawFrame());
    }
  }
}
