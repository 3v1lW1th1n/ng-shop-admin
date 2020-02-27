import {
  switchMap,
  map,
  withLatestFrom,
  catchError,
  tap,
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { loginPending } from '../actions/auth.action';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(private actions: Actions) {}

  public login$: Observable<any> = createEffect(() =>
    this.actions.pipe(ofType(loginPending)),
  );
}
