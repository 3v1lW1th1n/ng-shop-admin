import { ActionReducerMap } from '@ngrx/store';
import { reducerAuth, IAuthState } from './authreducer';
import { IProductState } from '@store-product/reducers/product.reducer';
import {
  reducerCategories,
  ICategoryState,
} from '@store-category/reducers/category.reducer';

export interface IStore {
  categories: ICategoryState;
  products: IProductState;
  auth: IAuthState;
}
export const reducers: ActionReducerMap<any> = {
  categories: reducerCategories,
  auth: reducerAuth,
};
