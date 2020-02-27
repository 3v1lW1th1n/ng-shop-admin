import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { CategoriesService } from '@shared/services/categories.service';
import {
  getCategoriesPending,
  getCategoriesSuccess,
  createCategoryPending,
  createCategorySuccess,
  updateCategoryPending,
  updateCategorySuccess,
  deleteCategoryPending,
  deleteCategorySuccess,
} from '@store-category/actions/category.action';

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
  public createCategory$: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(createCategoryPending),
      switchMap(({ category }) => {
        return this.categoriesService.addCategories(category).pipe(
          map(category => {
            return createCategorySuccess({ category });
          }),
          catchError(err => {
            // tslint:disable-next-line: no-console
            console.log(err);
            return EMPTY;
          }),
        );
      }),
    ),
  );
  public updateCategory$: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(updateCategoryPending),
      switchMap(({ category }) => {
        return this.categoriesService.editCategories(category).pipe(
          map(() => {
            return updateCategorySuccess({ category });
          }),
          catchError(err => {
            // tslint:disable-next-line: no-console
            console.log(err);
            return EMPTY;
          }),
        );
      }),
    ),
  );
  public deleteCategory$: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(deleteCategoryPending),
      switchMap(({ category }) => {
        return this.categoriesService.deleteCategory(category).pipe(
          map(() => {
            return deleteCategorySuccess({ category });
          }),
          catchError(err => {
            // tslint:disable-next-line: no-console
            console.log(err);
            return EMPTY;
          }),
        );
      }),
    ),
  );
}
