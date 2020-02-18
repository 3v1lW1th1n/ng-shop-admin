import { Component, OnInit, Input } from '@angular/core';
import { CategoriesDialogComponent } from './categories-dialog/categories-dialog.component';
import { ModalService } from '../modal/modal.service';
import {
  ICategory,
  CategoriesService,
  ISubcategory,
} from '@shared/services/categories.service';
import { SubCategoriesDialogComponent } from './sub-categories-dialog /sub-categories-dialog.component';

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
  public isOpen = true;
  public data: any;

  constructor(
    private _modalService: ModalService,
    private categoriesService: CategoriesService,
  ) {}

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
      // this.dataSource = new MatTableDataSource(this.data);
    });
    // this.categoriesService.getSubcategories().subscribe(data => {
    //   this.subCategories = data;
    //   console.log(this.subCategories);
    // });
  }
  public categoryClick() {
    this.isOpen = !this.isOpen;
  }
  public addSubcategory(category?: ICategory): void {
    this._modalService.open({
      component: SubCategoriesDialogComponent,
      context: {
        category,
        save: () => {
          this._modalService.close();
        },
        close: () => {
          this._modalService.close();
        },
      },
    });
  }

  public editCategory(category?: ICategory): void {
    this._modalService.open({
      component: CategoriesDialogComponent,
      context: {
        category,
        save: ({ isEdit, value }) => {
          if (isEdit) {
            this.categoriesService
              .editCategories({ ...category, ...value })
              .subscribe((p: ICategory) => {
                const index = this.data.findIndex(v => v._id === p._id);
                this.data.splice(index, 1, p);
                this.categories = this.data;
              });
            this._modalService.close();
            return;
          }
          this.categoriesService.addCategories(value).subscribe(p => {
            this.data.push(p);
            this.categories = this.data;
          });
          this._modalService.close();
        },
        close: () => {
          this._modalService.close();
        },
      },
    });
  }
}
