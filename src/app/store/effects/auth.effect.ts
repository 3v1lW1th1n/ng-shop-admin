import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { loginPending } from '@store-root/actions/auth.action';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(private actions: Actions) {}

  public login$: Observable<any> = createEffect(() =>
    this.actions.pipe(ofType(loginPending)),
  );
}
