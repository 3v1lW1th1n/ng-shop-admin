import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./content/products/products.module').then(
            mod => mod.ProductsModule,
          ),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./content/categories/categories.module').then(
            mod => mod.CategoriesModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
