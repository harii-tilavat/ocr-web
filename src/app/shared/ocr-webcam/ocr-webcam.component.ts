import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ocr-webcam',
  templateUrl: './ocr-webcam.component.html',
  styleUrls: ['./ocr-webcam.component.scss']
})
export class OcrWebcamComponent implements OnInit {
  public triggerObservable: Subject<void> = new Subject<void>();
  constructor() { }
  ngOnInit(): void {

  }
  handleImageCapture(imageSrc: any) {
    // Handle the captured image
    console.log('Captured image:', imageSrc);
  }

  captureImage() {
    this.triggerObservable.next();
  }
}
