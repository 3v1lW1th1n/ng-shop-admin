import {
  ProductsService,
  IProduct,
} from './../../shared/services/products.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { ModalService } from '../modal/modal.service';

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
  displayedColumns: string[] = [
    'name',
    'description',
    'price',
    'status',
    'category',
    'controls',
  ];
  public data = [];
  constructor(
    private productsService: ProductsService,
    private _modalService: ModalService,
  ) {}

  ngOnInit() {
    this.productsService.getProducts('').subscribe(data => {
      this.products = data;
    });
  }

  public deleteProduct(product: IProduct): void {
    this.productsService.deleteProducts(product).subscribe(data => {
      const index = this.data.findIndex(item => item._id === product._id);
      this.data.splice(index, 1);
      this.products = this.data;
    });
  }
  public editProduct(product?: IProduct): void {
    console.log(product);
    this._modalService.open({
      component: ProductsDialogComponent,
      context: {
        product,
        save: ({ isEdit, value }) => {
          if (isEdit) {
            this.productsService
              .editProducts({ ...product, ...value })
              .subscribe((p: IProduct) => {
                console.log(p);
                const index = this.data.findIndex(v => {
                  return v._id === p._id;
                });
                this.data.splice(index, 1, p);
                this.products = this.data;
              });
            this._modalService.close();
            return;
          }
          this.productsService.addProducts(value).subscribe(p => {
            this.products.push(p);
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
