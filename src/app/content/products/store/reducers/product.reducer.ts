import {
  getProductError,
  getProductSuccess,
  getProductPending,
  createProductPending,
  createProductSuccess,
  createProductError,
  updateProductPending,
  updateProductSuccess,
  updateProductError,
  deleteProductPending,
  deleteProductSuccess,
  deleteProductError,
} from './../actions/product.action';
import { createReducer, on } from '@ngrx/store';

export interface IProductState {
  item: IProduct;
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
    item: {
      _id: '',
      name: '',
      description: '',
      price: 1,
      status: true,
      images: [],
    },
    loading: false,
  },
  // GET
  on(getProductPending, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  on(getProductSuccess, (state: IProductState) => ({
    ...state,
    loading: false,
  })),
  on(getProductError, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  // CREATE
  on(createProductPending, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  on(createProductSuccess, (state: IProductState) => ({
    ...state,
    loading: false,
  })),
  on(createProductError, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  // UPDATE
  on(updateProductPending, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  on(updateProductSuccess, (state: IProductState) => ({
    ...state,
    loading: false,
  })),
  on(updateProductError, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  // DELETE
  on(deleteProductPending, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
  on(deleteProductSuccess, (state: IProductState) => ({
    ...state,
    loading: false,
  })),
  on(deleteProductError, (state: IProductState) => ({
    ...state,
    loading: true,
  })),
);

export function reducerProduct(state: IProductState | undefined, action: any) {
  return productReducer(state, action);
}
