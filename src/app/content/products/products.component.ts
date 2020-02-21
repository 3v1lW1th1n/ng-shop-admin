import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { ModalService } from '@modal/modal.service';
import { IProduct, selectAllProducts } from './store/reducers/product.reducer';
import { Store } from '@ngrx/store';
import {
  getProductsPending,
  deleteProductPending,
  createProductPending,
  updateProductPending,
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
  public page = 2;
  public hasMore = true;
  public loader: boolean;
  public search = new FormControl('');
  constructor(private _modalService: ModalService, private store: Store<any>) {}
  ngOnInit() {
    this.store.select(selectAllProducts).subscribe(products => {
      this.products = products;
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
    this.store.dispatch(deleteProductPending({ product }));
  }
  public editProduct(product?: IProduct): void {
    this._modalService.open({
      component: ProductsDialogComponent,
      context: {
        product,
        save: ({ isEdit, value }) => {
          if (isEdit) {
            this.store.dispatch(
              updateProductPending({ product: { ...product, ...value } }),
            );
            this._modalService.close();
            return;
          }
          this.store.dispatch(
            createProductPending({ product: { ...value, status: true } }),
          );
          this._modalService.close();
        },
        close: () => {
          this._modalService.close();
        },
      },
    });
  }
}
