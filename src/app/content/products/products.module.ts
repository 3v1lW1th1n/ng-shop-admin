import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';

@NgModule({
  declarations: [ProductsComponent, ProductsDialogComponent],
  imports: [ProductsRoutingModule, SharedModule],
  exports: [SharedModule],
  entryComponents: [ProductsDialogComponent],
})
export class ProductsModule {}
