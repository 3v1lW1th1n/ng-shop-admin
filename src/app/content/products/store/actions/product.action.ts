import { createAction, props } from '@ngrx/store';
import { IProduct } from '../reducers/product.reducer';
// GET
export const getProductsPending = createAction(
  '[Product] Get product pending',
  props<{ text?: string; page?: number }>(),
);
export const getProductsSuccess = createAction(
  '[Product] Get product success',
  props<{ products?: IProduct[]; hasMore: boolean }>(),
);
// CREATE
export const createProductPending = createAction(
  '[Product] Create  product pending',
  props<{ product: IProduct }>(),
);
export const createProductSuccess = createAction(
  '[Product] Create  product success',
  props<{ product: IProduct }>(),
);
// UPDATE
export const updateProductPending = createAction(
  '[Product] Update product pending',
  props<{ product: IProduct }>(),
);
export const updateProductSuccess = createAction(
  '[Product] Update  product success',
  props<{ product: IProduct }>(),
);
// DELETE
export const deleteProductPending = createAction(
  '[Product] Delete product pending',
  props<{ product: IProduct }>(),
);
export const deleteProductSuccess = createAction(
  '[Product] Delete  product success',
  props<{ product: IProduct }>(),
);
