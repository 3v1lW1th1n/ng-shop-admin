import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/product.effect';
import { StoreModule } from '@ngrx/store';
import { reducerProduct } from './store/reducers/product.reducer';

@NgModule({
  declarations: [ProductsComponent, ProductsDialogComponent],
  imports: [
    ProductsRoutingModule,
    SharedModule,
    StoreModule.forFeature('products', reducerProduct),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  exports: [SharedModule],
})
export class ProductsModule {}
