import { createAction, props } from '@ngrx/store';
import { IProductState } from '../reducers/product.reducer';
// GET
export const getProductPending = createAction('[Product] Get product pending');
export const getProductSuccess = createAction(
  '[Product] Get product success',
  props<{ product: IProductState }>(),
);
export const getProductError = createAction('[Product] Get product error');
// CREATE
export const createProductPending = createAction(
  '[Product] Create  product pending',
);
export const createProductSuccess = createAction(
  '[Product] Create  product success',
  props<{ product: IProductState }>(),
);
export const createProductError = createAction(
  '[Product] Create product error',
);
// UPDATE
export const updateProductPending = createAction(
  '[Product] Update product pending',
);
export const updateProductSuccess = createAction(
  '[Product] Update  product success',
  props<{ product: IProductState }>(),
);
export const updateProductError = createAction(
  '[Product] Update product error',
);
// DELETE
export const deleteProductPending = createAction(
  '[Product] Delete product pending',
);
export const deleteProductSuccess = createAction(
  '[Product] Delete  product success',
  props<{ product: IProductState }>(),
);
export const deleteProductError = createAction(
  '[Product] Delete product error',
);
