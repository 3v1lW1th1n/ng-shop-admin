import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.sass'],
})
export class ProductsDialogComponent {
  @Input()
  public set product(value) {
    if (!value) {
      return;
    }
    this.isEdit = true;
    this.form.patchValue(value);
  }

  public isEdit = false;

  public form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    status: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}
}
