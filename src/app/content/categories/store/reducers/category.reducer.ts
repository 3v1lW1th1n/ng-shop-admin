// import { logoutSuccess } from '../actions/auth.action';
import { createReducer, on } from '@ngrx/store';
import {
  getCategoriesPending,
  getCategoriesSuccess,
  createCategoryPending,
  createCategorySuccess,
} from '../actions/category.action';
// tslint:disable-next-line: max-line-length

export interface ICategoryState {
  items: ICategory[];
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
    items: [],
    loading: false,
  },
  on(getCategoriesPending, (state: ICategoryState) => ({
    ...state,
    loading: true,
  })),
  on(getCategoriesSuccess, (state: ICategoryState, { categories }) => ({
    ...state,
    items: categories,
    loading: false,
  })),

  on(createCategoryPending, (state: ICategoryState) => ({
    ...state,
    loading: true,
  })),
  on(createCategorySuccess, (state: ICategoryState) => ({
    ...state,
    loading: false,
  })),
);

export function reducerCategory(
  state: ICategoryState | undefined,
  action: any,
) {
  return categoryReducer(state, action);
}
