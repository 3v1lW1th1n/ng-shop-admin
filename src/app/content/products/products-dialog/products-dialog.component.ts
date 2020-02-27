import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '@shared/services/validators.service';
import { Store } from '@ngrx/store';
import { IStore } from 'src/app/store/reducers';
import { selectAllCategories } from '@store-category/reducers/category.reducer';
import { getCategoriesPending } from '@store-category/actions/category.action';
@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.sass'],
})
export class ProductsDialogComponent implements OnInit {
  public categories: any;
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
    subCategory: ['', Validators.required],
    // status: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    public validatorsService: ValidatorsService,
    private store: Store<IStore>,
  ) {}

  ngOnInit() {
    this.store.select(selectAllCategories).subscribe(categories => {
      this.categories = categories;
    });
    this.store.dispatch(getCategoriesPending());
  }
}
