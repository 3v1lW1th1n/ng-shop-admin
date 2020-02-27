import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CategoriesListComponent } from './products-dialog/categories-list/categories-list.component';
import { reducerCategories } from '@store-category/reducers/category.reducer';
import { CategoriesEffects } from '@store-category/effects/category.effect';
import { SharedModule } from '@shared/shared.module';
import { productsReducer } from '@store-product/reducers/product.reducer';
import { ProductsEffects } from '@store-product/effects/product.effect';

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
