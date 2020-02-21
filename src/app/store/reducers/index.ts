import { ActionReducerMap } from '@ngrx/store';
import {
  ICategoryState,
  reducerCategories,
} from 'src/app/content/categories/store/reducers/category.reducer';
import { reducerAuth, IAuthState } from './authreducer';

export interface IStore {
  categories: ICategoryState;
  auth: IAuthState;
}
export const reducers: ActionReducerMap<any> = {
  categories: reducerCategories,
  auth: reducerAuth,
};
