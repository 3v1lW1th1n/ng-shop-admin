import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { CategoriesDialogComponent } from './categories-dialog/categories-dialog.component';
import { SubCategoriesDialogComponent } from './sub-categories-dialog /sub-categories-dialog.component';
import { ModalService } from '@modal/modal.service';
import {
  ICategory,
  ISubcategory,
  selectAllCategories,
} from './store/reducers/category.reducer';
import {
  getCategoriesPending,
  updateCategoryPending,
  createCategoryPending,
  deleteCategoryPending,
} from './store/actions/category.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  updateSubCategoryPending,
  deleteSubCategoryPending,
  createSubCategoryPending,
} from './store/actions/sub-category.action';

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

  constructor(private _modalService: ModalService, private store: Store<any>) {}
  @ViewChild('category') private element: ElementRef;

  @HostListener('click', ['$event']) onClick(e: MouseEvent) {
    // console.log(this.element);
    console.log(e);
    if (!this.element.nativeElement.contains(e.target)) {
      console.log('outside');
      this.isOpen = [];
    } else {
      console.log('inside');
    }
  }
  ngOnInit() {
    this.store.select(selectAllCategories).subscribe(categories => {
      this.categories = categories;
    });
    this.store.dispatch(getCategoriesPending());
  }
  public categoryClick(index: number) {
    // console.log(index);
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
  ////////// SUBCATEGORY

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
