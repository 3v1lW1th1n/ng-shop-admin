import { Component, OnInit, Input } from '@angular/core';
import { CategoriesDialogComponent } from './categories-dialog/categories-dialog.component';
import { SubCategoriesDialogComponent } from './sub-categories-dialog /sub-categories-dialog.component';
import { ModalService } from '@modal/modal.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  ICategory,
  ISubcategory,
  selectAllCategories,
} from '@store-category/reducers/category.reducer';
import {
  getCategoriesPending,
  updateCategoryPending,
  createCategoryPending,
  deleteCategoryPending,
} from '@store-category/actions/category.action';
import {
  updateSubCategoryPending,
  createSubCategoryPending,
  deleteSubCategoryPending,
} from '@store-category/actions/sub-category.action';
import { IStore } from '@store-root/reducers';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass'],
})
export class CategoriesComponent implements OnInit {
  @Input()
  public category: ICategory;
  public panelOpenState = false;
  public categories: ICategory[];
  public subCategories: ISubcategory[];
  public subCategory: ISubcategory;
  public isOpen = [];
  public data: any;
  public categories$!: Observable<ICategory[]>;

  constructor(
    private _modalService: ModalService,
    private store: Store<IStore>,
  ) {}

  ngOnInit() {
    this.store.select(selectAllCategories).subscribe(categories => {
      this.categories = categories;
    });
    this.store.dispatch(getCategoriesPending());
  }
  public categoryClick(index: number) {
    this.isOpen[index] = !this.isOpen[index];
  }
  public editCategory(category?: ICategory): void {
    this._modalService.open({
      component: CategoriesDialogComponent,
      context: {
        category,
        save: ({ isEdit, value }) => {
          if (isEdit) {
            this.store.dispatch(
              updateCategoryPending({ category: { ...category, ...value } }),
            );
            this._modalService.close();
            return;
          }
          this.store.dispatch(
            createCategoryPending({ category: { ...value } }),
          );
          this._modalService.close();
        },
        close: () => {
          this._modalService.close();
        },
      },
    });
  }
  public deleteCategory(category: ICategory): void {
    this.store.dispatch(deleteCategoryPending({ category }));
  }
  /// SUBCATEGORY

  public editSubCategory(category?: ICategory, subCategory?: ISubcategory) {
    this._modalService.open({
      component: SubCategoriesDialogComponent,
      context: {
        subCategory,
        save: ({ isEdit, value }) => {
          if (isEdit) {
            this.store.dispatch(
              updateSubCategoryPending({
                subCategory: { ...subCategory, ...value },
              }),
            );
            this._modalService.close();

            return;
          }
          this.store.dispatch(
            createSubCategoryPending({
              subCategory: { ...value, category: category._id },
            }),
          );
          this._modalService.close();
        },
        close: () => {
          this._modalService.close();
        },
      },
    });
  }
  public deleteSubCategory(subCategory: ISubcategory): void {
    this.store.dispatch(deleteSubCategoryPending({ subCategory }));
  }
}
