import { createCategoryPending } from './../categories/store/actions/category.action';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { ModalService } from '@modal/modal.service';
import { IProduct, IProductState } from './store/reducers/product.reducer';
import { Store } from '@ngrx/store';
import {
  getProductsPending,
  updateProductsPending,
  createProductsPending,
} from './store/actions/product.action';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  @Input()
  public product: IProduct;
  public products: IProduct[];
  public data = [];
  public page = 1;
  public hasMore = true;
  public loader: boolean;
  public search = new FormControl('');
  constructor(
    private productsService: ProductsService,
    private _modalService: ModalService,
    private store: Store<any>,
  ) {}
  ngOnInit() {
    this.store.select('products').subscribe(products => {
      this.products = products.items;
      // console.log(this.products);
      this.loader = products.loading;
      this.hasMore = products.hasMore;
    });
    this.store.dispatch(getProductsPending({ page: this.page }));
  }
  public searchProduct() {}
  public onScroll() {
    if (!this.hasMore) {
      return;
    }
    this.page += 1;
    this.store.dispatch(getProductsPending({ page: this.page }));
  }
  public deleteProduct(product: IProduct): void {
    this.productsService.deleteProducts(product).subscribe(data => {
      const index = this.data.findIndex(item => item._id === product._id);
      this.data.splice(index, 1);
      this.products = this.data;
    });
  }
  public editProduct(product?: IProduct): void {
    this._modalService.open({
      component: ProductsDialogComponent,
      context: {
        product,
        save: ({ isEdit, value }) => {
          console.log(value);
          if (isEdit) {
            this.productsService
              .editProducts({ ...product, ...value })
              .subscribe((p: IProduct) => {
                // console.log(p);
                const index = this.data.findIndex(v => {
                  return v._id === p._id;
                });
                this.data.splice(index, 1, p);
                this.products = this.data;
              });
            // this.store.dispatch(updateProductsPending());
            this._modalService.close();
            return;
          }
          this.productsService.addProducts(value).subscribe(p => {
            this.products.push(p);
          });
          // this.store.dispatch(createProductsPending(value));
          this._modalService.close();
        },
        close: () => {
          this._modalService.close();
        },
      },
    });
  }
}
