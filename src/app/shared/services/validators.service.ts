import { Injectable } from '@angular/core';
import { ValidationErrors, FormGroup } from '@angular/forms';

@Injectable()
export class ValidatorsService {
  public nameValidator(control: FormGroup): ValidationErrors | null {
    const { name } = control.value;
    console.log(name);
    return name !== name ? { isNotMatch: true } : null;
  }
  // public actualDate(control: FormGroup): ValidationErrors | null {
  //   const { date } = control.value;
  //   if (new Date(date).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)) {
  //     return { isInvalid: true };
  //   } else {
  //     return null;
  //   }
  // }
}
