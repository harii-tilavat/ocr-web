import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit, OnDestroy {
  public html = '<h1>Welcome to OCR!</h1>';
  public pdfOptions = {
    pageFormat: 'A4', // Default to A4 format
    // Add other configuration options as needed
  };
  public subscription: Array<Subscription> = [];
  editorConfig = {
    toolbar: [
      { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike'] },
      { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Blockquote'] },
      { name: 'styles', items: ['Format', 'FontSize'] },
      { name: 'colors', items: ['TextColor', 'BGColor'] },
      '/',
      { name: 'document', items: ['Source'] },
      { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
      { name: 'editing', items: ['Scayt'] },
      { name: 'links', items: ['Link', 'Unlink'] },
      { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar'] },
      { name: 'tools', items: ['Maximize'] },
      { name: 'others', items: ['-'] },
      { name: 'heading', items: ['Format', 'Heading', 'Font', 'FontSize', 'Styles'] }
    ]
  };
  constructor() { }
  ngOnInit(): void {

  }
  generatePDF(): void {
    // const pdf = new jsPDF(); // Use jsPDF instead of jspdf
    const element = document.getElementById('htmlContent') as HTMLElement;
    const doc = new jsPDF({
      unit: 'px',
      format: this.pdfOptions.pageFormat === 'A4' ? [595, 842] : [842, 1191]
    });

    // Generate the PDF from HTML
    doc.html(element.innerHTML, {
      callback: (doc) => {
        doc.save('document.pdf');
      }
    });
    // html2canvas(element).then(canvas => {
    //   // Convert canvas to image data URL
    //   const imageData = canvas.toDataURL('image/png');
    //   console.log("Image => ", imageData);
    //   // Create a link to download the image
    //   const link = document.createElement('a');
    //   link.download = 'html_content_image.png';
    //   link.href = imageData;
    //   link.click();
    // });


  }

  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
