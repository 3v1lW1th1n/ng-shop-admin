import { createAction, props } from '@ngrx/store';
import { IProductState, IProduct } from '../reducers/product.reducer';
// GET
export const getProductsPending = createAction(
  '[Product] Get product pending',
  props<{ text?: string; page?: number }>(),
);
export const getProductsSuccess = createAction(
  '[Product] Get product success',
  props<{ products?: IProduct[]; hasMore: boolean }>(),
);
export const getProductsError = createAction('[Product] Get product error');
// CREATE
export const createProductsPending = createAction(
  '[Product] Create  product pending',
  // props<{ product: IProduct }>(),
);
export const createProductsSuccess = createAction(
  '[Product] Create  product success',
  // props<{ products: IProductState }>(),
);
export const createProductsError = createAction(
  '[Product] Create product error',
);
// UPDATE
export const updateProductsPending = createAction(
  '[Product] Update product pending',
);
export const updateProductsSuccess = createAction(
  '[Product] Update  product success',
  props<{ products: IProductState }>(),
);
export const updateProductsError = createAction(
  '[Product] Update product error',
);
// DELETE
export const deleteProductsPending = createAction(
  '[Product] Delete product pending',
);
export const deleteProductsSuccess = createAction(
  '[Product] Delete  product success',
  props<{ products: IProductState }>(),
);
export const deleteProductsError = createAction(
  '[Product] Delete product error',
);
