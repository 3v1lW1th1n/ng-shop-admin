import { createReducer, on } from '@ngrx/store';
import { loginPending, loginSuccess, loginError } from '../actions/auth.action';

export interface IAuthState {
  isLogged: boolean;
  loading: boolean;
}
const authReducer = createReducer(
  {
    isLogged: false,
    loading: false,
  },
  on(loginPending, (state: IAuthState) => ({
    ...state,
    loading: true,
  })),
  on(loginSuccess, (state: IAuthState) => ({
    ...state,
    loading: false,
  })),

  on(loginError, (state: IAuthState) => ({
    ...state,
    loading: true,
  })),
);

export function reducerAuth(state: IAuthState | undefined, action: any) {
  return authReducer(state, action);
}
