import {
  getProductsPending,
  getProductsSuccess,
  createProductPending,
  createProductSuccess,
  updateProductPending,
  updateProductSuccess,
  deleteProductPending,
  deleteProductSuccess,
} from './../actions/product.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of, from, EMPTY } from 'rxjs';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { ProductsService } from '@shared/services/products.service';
import { IProduct } from '../reducers/product.reducer';

@Injectable({
  providedIn: 'root',
})
export class ProductsEffects {
  constructor(
    private actions: Actions,
    private productsService: ProductsService,
  ) {}

  public getProduct$: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(getProductsPending),
      switchMap(props => {
        return this.productsService.getProducts(props).pipe(
          map((products: IProduct[]) => {
            if (products.length < 20) {
              return getProductsSuccess({ products, hasMore: false });
            }
            return getProductsSuccess({ products, hasMore: true });
          }),
          catchError(err => {
            console.log(err);
            return EMPTY;
          }),
        );
      }),
    ),
  );
  public createProduct$: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(createProductPending),
      switchMap(({ product }) => {
        return this.productsService.addProduct(product).pipe(
          map(product => {
            return createProductSuccess({ product });
          }),
          catchError(err => {
            console.log(err);
            return EMPTY;
          }),
        );
      }),
    ),
  );
  public updateProduct$: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(updateProductPending),
      switchMap(({ product }) => {
        return this.productsService.editProduct(product).pipe(
          map(() => {
            return updateProductSuccess({ product });
          }),
          catchError(err => {
            console.log(err);
            return EMPTY;
          }),
        );
      }),
    ),
  );
  public deleteProduct$: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(deleteProductPending),
      switchMap(({ product }) => {
        return this.productsService.deleteProduct(product).pipe(
          map(() => {
            return deleteProductSuccess({ product });
          }),
          catchError(err => {
            console.log(err);
            return EMPTY;
          }),
        );
      }),
    ),
  );
}
