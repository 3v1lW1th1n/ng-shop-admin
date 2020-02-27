import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
// tslint:disable-next-line: max-line-length
import {
  getProductsSuccess,
  deleteProductSuccess,
  createProductSuccess,
  updateProductSuccess,
} from '../actions/product.action';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
export interface IProductState {
  items: IProduct[];
  hasMore: boolean;
  loading: boolean;
}

export interface IProductImage {
  url: string;
  source: string;
}
export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  status: boolean;
  images: IProductImage[];
}

export const productsAdapter: EntityAdapter<IProduct> = createEntityAdapter<
  IProduct
>({
  selectId: (product: IProduct) => product._id,
});

export const initialState: EntityState<IProduct> = productsAdapter.getInitialState(
  {},
);

export const productsReducer = createReducer(
  initialState,
  // GET
  on(getProductsSuccess, (state, { products }) => {
    return productsAdapter.addMany(products, state);
  }),
  // CREATE
  on(createProductSuccess, (state, { product }) => {
    return productsAdapter.addOne(product, state);
  }),
  // UPDATE
  on(updateProductSuccess, (state, { product: { _id: id, ...changes } }) => {
    return productsAdapter.updateOne({ id, changes }, state);
  }),
  // DELETE
  on(deleteProductSuccess, (state, { product: { _id: id } }) => {
    return productsAdapter.removeOne(id, state);
  }),
);

export const { selectAll } = productsAdapter.getSelectors();

export const selectProductsState = createFeatureSelector<EntityState<IProduct>>(
  'products',
);
export const selectAllProducts = createSelector(selectProductsState, selectAll);
