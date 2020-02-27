import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  getCategoriesSuccess,
  createCategorySuccess,
  updateCategorySuccess,
  deleteCategorySuccess,
} from '@store-category/actions/category.action';

export interface ICategoryState {
  items: ICategory[];
  loading: boolean;
}
export interface ICategory {
  name: string;
  _id: string;
  subCategories: ISubcategory[];
}
export interface ISubcategory {
  _id: string;
  name: string;
  category: string;
}

export const categoriesAdapter: EntityAdapter<ICategory> = createEntityAdapter<
  ICategory
>({ selectId: (category: ICategory) => category._id });

export const initialState: EntityState<ICategory> = categoriesAdapter.getInitialState(
  {},
);
export const reducerCategories = createReducer(
  initialState,
  // GET
  on(getCategoriesSuccess, (state, { categories }) => {
    return categoriesAdapter.addMany(categories, state);
  }),
  // CREATE
  on(createCategorySuccess, (state, { category }) => {
    return categoriesAdapter.addOne(category, state);
  }),
  // UPDATE
  on(updateCategorySuccess, (state, { category: { _id: id, ...changes } }) => {
    return categoriesAdapter.updateOne({ id, changes }, state);
  }),
  // DELETE
  on(deleteCategorySuccess, (state, { category: { _id: id } }) => {
    return categoriesAdapter.removeOne(id, state);
  }),
);

export const { selectAll } = categoriesAdapter.getSelectors();

export const selectCategoriesState = createFeatureSelector<
  EntityState<ICategory>
>('categories');
export const selectAllCategories = createSelector(
  selectCategoriesState,
  selectAll,
);
