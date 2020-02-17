import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoriesDialogComponent } from './categories-dialog/categories-dialog.component';

@NgModule({
  declarations: [CategoriesComponent, CategoriesDialogComponent],
  imports: [CategoriesRoutingModule, SharedModule],
  exports: [SharedModule],
})
export class CategoriesModule {}
