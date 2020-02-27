import { SubCategoriesEffects } from './store/effects/sub-category.effect';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoriesDialogComponent } from './categories-dialog/categories-dialog.component';
import { SubCategoriesDialogComponent } from './sub-categories-dialog /sub-categories-dialog.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducerCategories } from '@store-category/reducers/category.reducer';
import { CategoriesEffects } from '@store-category/effects/category.effect';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesDialogComponent,
    SubCategoriesDialogComponent,
  ],
  imports: [
    CategoriesRoutingModule,
    SharedModule,
    StoreModule.forFeature('categories', reducerCategories),
    EffectsModule.forFeature([CategoriesEffects, SubCategoriesEffects]),
  ],

  exports: [SharedModule],
})
export class CategoriesModule {}
