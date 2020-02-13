import {
  ProductsService,
  IProduct,
} from './../../shared/services/products.service';
import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Injector,
  ComponentFactoryResolver,
} from '@angular/core';
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
  displayedColumns: string[] = [
    'name',
    'description',
    'price',
    'status',
    'controls',
  ];
  dataSource = new MatTableDataSource([]);
  public sort: MatSort;
  public data: any;
  constructor(
    private productsService: ProductsService,
    private _modalService: ModalService,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _injector: Injector,
  ) {}

  @ViewChild(MatSort, { static: false }) set matSort(mp: MatSort) {
    this.sort = mp;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.productsService.getProducts.subscribe(data => {
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public deleteProduct(product: IProduct): void {
    // console.log(product._id);
    this.productsService.deleteProducts(product).subscribe(data => {
      const index = this.data.findIndex(data => data._id === product._id);
      // console.log(index);
      this.data.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.data);
    });
  }

  public editProduct(product?: IProduct): void {
    this._modalService.open({
      component: ProductsDialogComponent,
      resolver: this._componentFactoryResolver,
      injector: this._injector,
      context: {
        product,
        save: ({ isEdit, value }) => {
          if (isEdit) {
            this.productsService
              .editProducts({ ...product, ...value })
              .subscribe((p: IProduct) => {
                const index = this.data.findIndex(v => v._id === p._id);
                this.data.splice(index, 1, p);
                this.dataSource = new MatTableDataSource(this.data);
              });
            this._modalService.close();
            return;
          }
          this.productsService.addProducts(value).subscribe(p => {
            this.data.push(p);
            this.dataSource = new MatTableDataSource(this.data);
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
