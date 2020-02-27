import { createAction, props } from '@ngrx/store';
import { ICategoryState, ICategory } from '../reducers/category.reducer';

// GET
export const getCategoriesPending = createAction(
  '[Category] Get categories pending',
);
export const getCategoriesSuccess = createAction(
  '[Category] Get categories success',
  props<{ categories: ICategory[] }>(),
);

// CREATE
export const createCategoryPending = createAction(
  '[Category] Create category pending',
  props<{ category: ICategory }>(),
);
export const createCategorySuccess = createAction(
  '[Category] Create category success',
  props<{ category: ICategory }>(),
);

// UPDATE
export const updateCategoryPending = createAction(
  '[Category] Update category pending',
  props<{ category: ICategory }>(),
);
export const updateCategorySuccess = createAction(
  '[Category] Update category success',
  props<{ category: ICategory }>(),
);

// DELETE
export const deleteCategoryPending = createAction(
  '[Category] Delete category pending',
  props<{ category: ICategory }>(),
);
export const deleteCategorySuccess = createAction(
  '[Category] Delete category success',
  props<{ category: ICategory }>(),
);
