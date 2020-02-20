import { createAction, props } from '@ngrx/store';
import { ICategoryState, ICategory } from '../reducers/category.reducer';

export const getCategoriesPending = createAction(
  '[Category] Get categories pending',
);
export const getCategoriesSuccess = createAction(
  '[Category] Get categories success',
  props<{ categories: ICategory[] }>(),
);
export const getCategoriesError = createAction('[Category] Get categories error');

export const createCategoryPending = createAction(
  '[Category] Create category pending',
);
export const createCategorySuccess = createAction(
  '[Category] Create category success',
  props<{ category: ICategoryState }>(),
);
export const createCategoryError = createAction(
  '[Category] Create category error',
);
