import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qna-accordian',
  templateUrl: './qna-accordian.component.html',
  styleUrls: ['./qna-accordian.component.scss']
})
export class QnaAccordianComponent implements OnInit {
  public themeColor = '#5e35b1';
  public qnaList = [
    {
      id: 1,
      title: 'How does OCRWeb work?',
      desc: 'OCRWeb works on OCR technology that leverages AI & ML capabilities. OCR (Optical Character Recognition) is a popular technology that converts any kind of text or information stored in digital documents into machine-readable data. Hard copies and paper documents can thus be converted into computer-readable file formats, suitable for further editing or data processing.'
    },
    {
      id: 2,
      title: 'Why do I need OCR to extract data?',
      desc: 'OCR (Optical Character Recognition) is essential for data extraction from documents as it automates the conversion of images or scanned documents into editable and searchable text.'
    },
    {
      id: 3,
      title: 'Is this tool free to use?',
      desc: 'OCRWeb Online OCR is completely free-to-use. OCRWeb offers a range of capabilities to automate data capture from invoices, receipts, and other common document workflows.'
    }
  ]
  constructor() { }
  ngOnInit(): void {
  }

}
