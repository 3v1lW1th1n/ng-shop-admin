import { createAction, props } from '@ngrx/store';
import { ICategoryState } from '../reducers/category.reducer';

export const getCategoryPending = createAction(
  '[Category] Get category pending',
);
export const getCategorySuccess = createAction(
  '[Category] Get category success',
  props<{ category: ICategoryState }>(),
);
export const getCategoryError = createAction('[Category] Get category error');

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
