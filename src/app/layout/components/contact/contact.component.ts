import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm = new FormGroup({
    name: new FormControl<string | null>(null, [Validators.required]),
    surname: new FormControl<string | null>(null, [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    subject: new FormControl<string | null>(null, [Validators.required]),
    message: new FormControl<string | null>(null, [Validators.required]),
  });
  constructor() { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    console.log("Value ==>> ", this.contactForm.value);
  }
}
