import {
  Params,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {
  IProductState,
  reducerProduct,
} from 'src/app/content/products/store/reducers/product.reducer';
import {
  ICategoryState,
  reducerCategory,
} from 'src/app/content/categories/store/reducers/category.reducer';
import { reducerAuth, IAuthState } from './authreducer';

export interface IStore {
  product: IProductState;
  category: ICategoryState;
  auth: IAuthState;
}
export const reducers: ActionReducerMap<any> = {
  product: reducerProduct,
  category: reducerCategory,
  auth: reducerAuth,
};
export interface IRouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}
export class CustomRouterSerializer
  implements fromRouter.RouterStateSerializer<IRouterStateUrl> {
  public serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    const {
      url,
      root: { queryParams },
    } = routerState;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;
    return { url, queryParams, params };
  }
}
