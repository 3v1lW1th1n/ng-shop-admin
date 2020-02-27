import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { CategoriesService } from '@shared/services/categories.service';
import {
  createSubCategoryPending,
  createSubCategorySuccess,
  updateSubCategoryPending,
  updateSubCategorySuccess,
  deleteSubCategoryPending,
  deleteSubCategorySuccess,
} from '@store-category/actions/sub-category.action';

@Injectable({
  providedIn: 'root',
})
export class SubCategoriesEffects {
  constructor(
    private actions: Actions,
    private categoriesService: CategoriesService,
  ) {}

  public createSubCategory$: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(createSubCategoryPending),
      switchMap(({ subCategory }) => {
        return this.categoriesService.addSubCategory(subCategory).pipe(
          map(subCategory => {
            return createSubCategorySuccess({ subCategory });
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
  public updateSubCategory$: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(updateSubCategoryPending),
      switchMap(({ subCategory }) => {
        return this.categoriesService.editSubCategory(subCategory).pipe(
          map(() => {
            return updateSubCategorySuccess({ subCategory });
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
  public deleteSubCategory$: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(deleteSubCategoryPending),
      switchMap(({ subCategory }) => {
        return this.categoriesService.deleteSubCategory(subCategory).pipe(
          map(() => {
            return deleteSubCategorySuccess({ subCategory });
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
