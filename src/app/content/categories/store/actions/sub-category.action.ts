import { createAction, props } from '@ngrx/store';
import { ISubcategory } from '@store-category/reducers/category.reducer';

// CREATE
export const createSubCategoryPending = createAction(
  '[SubCategory] Create subcategory pending',
  props<{ subCategory: ISubcategory }>(),
);
export const createSubCategorySuccess = createAction(
  '[SubCategory] Create subcategory success',
  props<{ subCategory: ISubcategory }>(),
);

// UPDATE
export const updateSubCategoryPending = createAction(
  '[SubCategory] Update subcategory pending',
  props<{ subCategory: ISubcategory }>(),
);
export const updateSubCategorySuccess = createAction(
  '[SubCategory] Update subcategory success',
  props<{ subCategory: ISubcategory }>(),
);

// DELETE
export const deleteSubCategoryPending = createAction(
  '[SubCategory] Delete subcategory pending',
  props<{ subCategory: ISubcategory }>(),
);
export const deleteSubCategorySuccess = createAction(
  '[SubCategory] Delete subcategory success',
  props<{ subCategory: ISubcategory }>(),
);
