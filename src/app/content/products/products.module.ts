import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/product.effect';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './store/reducers/product.reducer';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { reducerCategories } from '../categories/store/reducers/category.reducer';
import { CategoriesEffects } from '../categories/store/effects/category.effect';
import { CategoriesListComponent } from './products-dialog/categories-list/categories-list.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDialogComponent,
    CategoriesListComponent,
  ],
  imports: [
    InfiniteScrollModule,
    ProductsRoutingModule,
    SharedModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
    StoreModule.forFeature('categories', reducerCategories),
    EffectsModule.forFeature([CategoriesEffects]),
  ],
  exports: [SharedModule],
})
export class ProductsModule {}
