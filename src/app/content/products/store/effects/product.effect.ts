import {
  getProductPending,
  createProductPending,
  updateProductPending,
  deleteProductPending,
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
import { Observable, of, from } from 'rxjs';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { ProductsService } from '@shared/services/products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsEffects {
  constructor(
    private actions: Actions,
    private productsService: ProductsService,
  ) {}

  public getProduct$: Observable<any> = createEffect(() =>
    this.actions.pipe(ofType(getProductPending)),
  );
  public createProduct$: Observable<any> = createEffect(() =>
    this.actions.pipe(ofType(createProductPending)),
  );
  public updateProduct$: Observable<any> = createEffect(() =>
    this.actions.pipe(ofType(updateProductPending)),
  );
  public deleteProduct$: Observable<any> = createEffect(() =>
    this.actions.pipe(ofType(deleteProductPending)),
  );
}
