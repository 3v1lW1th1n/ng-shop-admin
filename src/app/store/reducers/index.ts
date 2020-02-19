import { ActionReducerMap } from '@ngrx/store';
import {
  IProductState,
  reducerProduct,
} from 'src/app/content/products/store/reducers/product.reducer';
import {
  ICategoryState,
  reducerCategory,
} from 'src/app/content/categories/store/reducers/category.reducer';
import { reducerAuth, IAuthState } from './authreducer';

export interface IStore {
  product: IProductState;
  category: ICategoryState;
  auth: IAuthState;
}
export const reducers: ActionReducerMap<any> = {
  product: reducerProduct,
  category: reducerCategory,
  auth: reducerAuth,
};
