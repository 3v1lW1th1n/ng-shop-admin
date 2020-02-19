import { createReducer, on } from '@ngrx/store';
// tslint:disable-next-line: max-line-length
import {
  getProductsPending,
  getProductsSuccess,
  getProductsError,
  createProductsPending,
  createProductsSuccess,
  createProductsError,
  updateProductsPending,
  updateProductsSuccess,
  updateProductsError,
  deleteProductsPending,
  deleteProductsSuccess,
  deleteProductsError,
} from '../actions/product.action';

export interface IProductState {
  items: IProduct[];
  loading: boolean;
}

export interface IProductImage {
  url: string;
  source: string;
}
export interface IProduct {
  _id: String;
  name: String;
  description: String;
  price: number;
  status: boolean;
  images: IProductImage[];
}
const productReducer = createReducer(
  {
    items: [],
    loading: false,
  },
  // GET
  on(getProductsPending, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  on(getProductsSuccess, (_state: IProductState, { products }) => ({
    items: products,
    loading: false,
  })),
  on(getProductsError, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  // CREATE
  on(createProductsPending, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  on(createProductsSuccess, (state: IProductState) => ({
    ...state,
    loading: false,
  })),
  on(createProductsError, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  // UPDATE
  on(updateProductsPending, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  on(updateProductsSuccess, (state: IProductState) => ({
    ...state,
    loading: false,
  })),
  on(updateProductsError, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  // DELETE
  on(deleteProductsPending, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  on(deleteProductsSuccess, (state: IProductState) => ({
    ...state,
    loading: false,
  })),
  on(deleteProductsError, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
);

export function reducerProduct(state: IProductState | undefined, action: any) {
  return productReducer(state, action);
}
