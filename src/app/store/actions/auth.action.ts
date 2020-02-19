import { createAction, props } from '@ngrx/store';

export const loginPending = createAction('[Login] Login pending');
export const loginSuccess = createAction('[Login] Login success');
export const loginError = createAction('[Login] Login error');
