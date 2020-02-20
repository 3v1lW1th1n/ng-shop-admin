import { getCategoriesSuccess } from './../actions/category.action';
import { IStore } from 'src/app/store/reducers';
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
import { CategoriesService } from '@shared/services/categories.service';
import { getCategoriesPending } from '../actions/category.action';

@Injectable({
  providedIn: 'root',
})
export class CategoriesEffects {
  constructor(
    private actions: Actions,
    private categoriesService: CategoriesService,
  ) {}

  public getCategories$: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(getCategoriesPending),
      switchMap(() => {
        return this.categoriesService
          .getCategories()
          .pipe(map(categories => getCategoriesSuccess({ categories })));
      }),
    ),
  );
}
