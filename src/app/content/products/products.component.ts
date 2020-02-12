import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';

export interface PeriodicElement {
  name: string;
  description: string;
  price: number;
  status: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', description: 'bla bla', price: 1, status: true },
  { name: 'Helium', description: 'bla bla', price: 4, status: true },
  { name: 'Lithium', description: 'bla blabla bla', price: 6, status: true },
  { name: 'Beryllium', description: 'bla bla bla', price: 9, status: false },
  { name: 'Boron', description: 'bla bla', price: 10, status: false },
];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'description',
    'price',
    'status',
    'controls',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private dialog: MatDialog) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  public addProduct() {
    this.dialog.open(ProductsDialogComponent, {
      hasBackdrop: true,
      panelClass: 'custom-dialog-container',
      data: {
        title: 'Add product',
      },
    });
  }
  public editProduct() {
    this.dialog.open(ProductsDialogComponent, {
      hasBackdrop: true,
      panelClass: 'custom-dialog-container',
      data: {
        title: 'Edit product',
      },
    });
  }
}
