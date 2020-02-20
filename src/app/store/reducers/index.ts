import { ActionReducerMap } from '@ngrx/store';
import {
  IProductState,
  reducerProduct,
} from 'src/app/content/products/store/reducers/product.reducer';
import {
  ICategoryState,
  reducerCategories,
} from 'src/app/content/categories/store/reducers/category.reducer';
import { reducerAuth, IAuthState } from './authreducer';

export interface IStore {
  products: IProductState;
  categories: ICategoryState;
  auth: IAuthState;
}
export const reducers: ActionReducerMap<any> = {
  products: reducerProduct,
  categories: reducerCategories,
  auth: reducerAuth,
};
