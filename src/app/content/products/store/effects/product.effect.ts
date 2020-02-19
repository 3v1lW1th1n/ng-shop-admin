import {
  getProductsPending,
  createProductsPending,
  updateProductsPending,
  deleteProductsPending,
  getProductsSuccess,
} from './../actions/product.action';
import { IStore } from 'src/app/store/reducers';
import {
  switchMap,
  map,
  withLatestFrom,
  catchError,
  tap,
} from 'rxjs/operators';
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
      switchMap(search => {
        return this.productsService.getProducts(search).pipe(
          map((products: IProduct[]) => {
            return getProductsSuccess({ products });
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
    this.actions.pipe(ofType(createProductsPending)),
  );
  public updateProduct$: Observable<any> = createEffect(() =>
    this.actions.pipe(ofType(updateProductsPending)),
  );
  public deleteProduct$: Observable<any> = createEffect(() =>
    this.actions.pipe(ofType(deleteProductsPending)),
  );
}
