import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SalesComponent } from './sales.component';
import { SalesRoutingModule } from './sales-routing.module';

@NgModule({
  declarations: [SalesComponent],
  imports: [SalesRoutingModule, SharedModule],
  exports: [SharedModule],
})
export class SalesModule {}
