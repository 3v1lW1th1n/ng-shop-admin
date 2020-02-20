import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoriesDialogComponent } from './categories-dialog/categories-dialog.component';
import { SubCategoriesDialogComponent } from './sub-categories-dialog /sub-categories-dialog.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesEffects } from './store/effects/category.effect';
import { reducerCategories } from './store/reducers/category.reducer';

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
    EffectsModule.forFeature([CategoriesEffects]),
  ],

  exports: [SharedModule],
})
export class CategoriesModule {}
