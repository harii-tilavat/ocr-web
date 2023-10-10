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
  async initCanvas(): Promise<void> {
    this.canvas = (this.el.nativeElement as HTMLCanvasElement);
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    if (this.playrUrl.includes('.mp4')) {
      this.video = this.renderer.createElement('video') as HTMLVideoElement;
      this.video.src = `/assets/gif/${this.playrUrl}`; // ${mediaType}
      this.video.autoplay = true;
      this.video.muted = true;
      this.video.loop = true;
      this.video.setAttribute("autoplay", "true");
      this.video.setAttribute("preload", "none");
      this.video.setAttribute('allow', 'autoplay');
      // Once the video is loaded, draw it on the canvas
      this.video.addEventListener('loadeddata', async () => {
        if (this.ctx) {
          this.canvas.width = this.video.videoWidth;
          this.canvas.height = this.video.videoHeight;
          this.drawFrame();
        }
      });
      console.log(this.video, this.el.nativeElement);
      // Show loading animation.
      const playPromise = await this.video.play();
      if (playPromise !== undefined) {
        // playPromise.then((_) => {
        //   console.log(_);
        // }).catch((error: any) => {
        //   // Auto-play was prevented
        //   // Show paused UI.
        // });
        return;
      }

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
