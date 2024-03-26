import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '../../ng-modal';
import { FileUploadService } from 'src/app/_services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  public stars = Array(5).fill(false);
  public rated = false;
  public userRating = 5;
  public userId = null;
  public feedbackData: any;
  public ratingForm = new FormGroup({
    rating: new FormControl(this.userRating),
    comment: new FormControl(null, Validators.required),
    // email: [this.userdata.email, [Validators.required, CustomValidatorRules.emailValidation]],
  });

  constructor(public activeModal: NgbActiveModal, private fileUploadService: FileUploadService, private toastrService: ToastrService) { }
  ngOnInit(): void {
    this.ratingForm.valueChanges.subscribe((res) => {
      this.setUserRating();
    })
  }
  onSubmit(): any {
    if (!this.ratingForm.valid) {
      this.toastrService.error('Please provide all fields!', 'ERROR');
      return false;
    }
    this.activeModal.close(true);
    this.fileUploadService.setFeedback(this.feedbackData).subscribe({
      next: (res) => {
        this.toastrService.success(res.message, 'Success');

      }, error: (err) => {
        this.toastrService.error(err.error.message || 'Something went wrong!', 'ERROR');
      }
    });
    console.log("Feedback => ", this.feedbackData);
  }
  rateProject(rating: number): void {
    this.rated = true;
    this.userRating = rating;
    this.ratingForm.patchValue({
      rating: rating
    });
    this.setUserRating();
  }

  hoverStar(index: number): void {
    if (!this.rated) {
      this.stars = this.stars.map((_, i) => i <= index);
    }
  }

  resetHover(): void {
    if (!this.rated) {
      this.stars = Array(5).fill(false);
    }
  }
  setUserRating(): void {
    const user_id = this.fileUploadService.getUserId();
    this.feedbackData = { user_id, ...this.ratingForm.value };
  }
}
