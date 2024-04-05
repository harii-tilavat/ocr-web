import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit, OnDestroy {
  public html = '<p>CK EDITOR BOOM</p>';
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
  constructor(){}
  ngOnInit():void{

  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
