import { FormControl, ValidationErrors, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidatorRules {
  static oneUpperCase(control: AbstractControl): ValidationErrors | null {
    const UPPER_CASE_REGEXP = /(?=.*?[A-Z])/;
    return !UPPER_CASE_REGEXP.test(control.value) ? { oneUpperCaseValidation: true } : null;
  }
  static oneLowerCase(control: AbstractControl): ValidationErrors | null {
    const LOWER_CASE_REGEXP = /(?=.*?[a-z])/;
    return !LOWER_CASE_REGEXP.test(control.value) ? { oneLowerCaseValidation: true } : null;
  }

  static oneDigit(control: AbstractControl): ValidationErrors | null {
    const DIGIT_CASE_REGEXP = /(?=.*?[0-9])/;
    return !DIGIT_CASE_REGEXP.test(control.value) ? { oneDigitValidation: true } : null;
  }
  static minimumLength(control: AbstractControl): ValidationErrors | null {
    const MINIMUM_CASE_REGEXP = /.{8,}/;
    return !MINIMUM_CASE_REGEXP.test(control.value) ? { minimumLengthValidation: true } : null;
  }
  static stringMust(control: AbstractControl): ValidationErrors | null {
    const STRING_MUST_REGEXP = /[a-zA-Z][a-zA-Z ]+/;
    return !STRING_MUST_REGEXP.test(control.value) ? { stringMustValidation: true } : null;
  }
  static onlyString(control: AbstractControl): ValidationErrors | null {
    const ONLY_STRING_REGEXP = /^[A-Za-z\s]*$/;
    return !ONLY_STRING_REGEXP.test(control.value) ? { onlyString: true } : null;
  }
  static onlyDigit(control: AbstractControl): ValidationErrors | null {
    const ONLY_STRING_REGEXP = /^[0-9]*$/;
    return !ONLY_STRING_REGEXP.test(control.value) ? { onlyString: true } : null;
  }
  static emailValidation(control: AbstractControl): ValidationErrors | null {
    const EMAIL_MUST_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (control.value) {
      return !EMAIL_MUST_REGEXP.test(control.value) ? { emailValidation: true } : null;
    }
    return null;
  }
  static urlValidation(control: AbstractControl): ValidationErrors | null {
    const URL_REGEXP = /^(?:(?:https?|s?ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/;
    // return (control: AbstractControl): { [key: string]: any } | null => {
    //   return URL_REGEXP.test(control.value) ? { urlValidation: true } : null;
    // };
    if (control.value) {
      return !URL_REGEXP.test(control.value) ? { urlValidation: true } : null;
    }
    return null;
  }
  static noWhitespace(control: AbstractControl): ValidationErrors | null {
    if (typeof control.value === 'number') {
      control.setValue(control.value.toString());
    }
    if (control.value && control.value.length) {
      const isWhitespace = !((control.value || '').trim().length === 0);
      return isWhitespace ? null : { whitespace: true };
    }
    return null;
  }
}


