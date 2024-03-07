import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '../../ng-modal';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']
})
export class AlertBoxComponent implements OnInit {
  @Input() title!: string;
  @Input() message!: string;
  @Input() icon: { name: string | null; color: string | null } = {
    name: null,
    color: '#000'
  };
  @Input() iconColor!: string;
  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'success';
  @Input() isPrimeBtn = true;
  @Input() primeBtn = 'Save';
  @Input() isSecoundBtn = true;
  @Input() secoundaryBtn = 'Cancel';
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
