// import { AbstractForm } from '@shared/form-helper';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.sass'],
})
export class ProductsDialogComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    // super();
  }
  ngOnInit() {
    // this.form = this.fb.group(
    //   {
    //     name: [''],
    //     description: [''],
    //     price: [''],
    //     status: [''],
    //   },
    // );
    // if (this.data) {
    //   this.form.patchValue({
    //     name: this.data.name,
    //     description: this.data.description,
    //     price: this.data.price,
    //     status: this.data.status,
    //    });
    // }
  }
  public closeBtn() {
    this.dialogRef.close(false);
  }
  public closeBtnYes() {
    this.dialogRef.close(true);
  }
}
