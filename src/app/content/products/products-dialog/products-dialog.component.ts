import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ValidatorsService } from '@shared/services/validators.service';
@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.sass'],
})
export class ProductsDialogComponent implements OnInit {
  @Input()
  public set product(value) {
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
    description: ['', Validators.required],
    price: ['', Validators.required],
    category: ['', Validators.required],
    status: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    public validatorsService: ValidatorsService,
  ) {}

  ngOnInit() {}
}