import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  ICategory,
  ISubcategory,
} from '@store-category/reducers/category.reducer';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CategoriesListComponent,
      multi: true,
    },
  ],
})
export class CategoriesListComponent implements ControlValueAccessor {
  @Input()
  public categories!: ICategory[];
  public isOpen = false;
  public currentSubCategory: any;
  public defaultValue = { name: 'Все категории' };
  public onChange!: Function;

  writeValue(_id: string): void {
    const currentCategory = this.categories.find((category: ICategory) =>
      category.subCategories.find((sub: ISubcategory) => sub._id === _id),
    );
    this.currentSubCategory = currentCategory || this.defaultValue;
  }
  registerOnChange(fn: Function) {
    this.onChange = fn;
  }
  registerOnTouched() {}

  public categoryToggle() {
    this.isOpen = !this.isOpen;
  }
  public subCategoryToggle(subCategory: any) {
    this.currentSubCategory = subCategory;
    this.categoryToggle();
    this.onChange(this.currentSubCategory._id);
  }
}
