import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '@shared/services/validators.service';
@Component({
  selector: 'app-categories-dialog',
  templateUrl: './categories-dialog.component.html',
  styleUrls: ['./categories-dialog.component.sass'],
})
export class CategoriesDialogComponent {
  @Input()
  public set category(value) {
    if (!value) {
      return;
    }
    this.isEdit = true;
    this.form.patchValue(value);
  }

  public close: () => void;
  public save: ({ isEdit: boolean, value: object }) => void;
  public isEdit = false;

  public form: FormGroup = this.fb.group({
    name: [
      '',
      Validators.required,
      this.validatorsService.nameValidator.bind(this.validatorsService),
    ],
  });
  constructor(
    private fb: FormBuilder,
    public validatorsService: ValidatorsService,
  ) {}
}
