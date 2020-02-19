// import { logoutSuccess } from '../actions/auth.action';
import { createReducer, on } from '@ngrx/store';
// tslint:disable-next-line: max-line-length
import {
  getProductSuccess,
  getProductPending,
  getProductError,
  createProductPending,
  createProductSuccess,
  createProductError,
} from 'src/app/content/products/store/actions/product.action';

export interface ICategoryState {
  item: ICategory;
  loading: boolean;
}
export interface ICategory {
  name: String;
  _id: String;
}
export interface ISubcategory {
  _id: String;
  name: String;
  idCategory: String;
}
const categoryReducer = createReducer(
  {
    item: {
      _id: '',
      name: '',
    },
    loading: false,
  },
  on(getProductPending, (state: ICategoryState) => ({
    ...state,
    loading: true,
  })),
  on(getProductSuccess, (state: ICategoryState) => ({
    ...state,
    loading: false,
  })),

  on(getProductError, (state: ICategoryState) => ({
    ...state,
    loading: true,
  })),

  on(createProductPending, (state: ICategoryState) => ({
    ...state,
    loading: true,
  })),
  on(createProductSuccess, (state: ICategoryState) => ({
    ...state,
    loading: false,
  })),

  on(createProductError, (state: ICategoryState) => ({
    ...state,
    loading: true,
  })),
);

export function reducerCategory(
  state: ICategoryState | undefined,
  action: any,
) {
  return categoryReducer(state, action);
}
