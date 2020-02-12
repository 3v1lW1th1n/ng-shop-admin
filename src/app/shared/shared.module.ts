import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsDialogComponent } from '../content/products/products-dialog/products-dialog.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
@NgModule({
  declarations: [ProductsDialogComponent],
  entryComponents: [ProductsDialogComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
  ],
  imports: [MatGridListModule],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: MAT_DIALOG_DEFAULT_OPTIONS,
          useValue: { hasBackdrop: false },
        },
      ],
    };
  }
}
