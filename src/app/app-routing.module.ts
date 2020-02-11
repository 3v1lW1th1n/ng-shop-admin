import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';

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
      {
        path: 'sales',
        loadChildren: () =>
          import('./content/sales/sales.module').then(mod => mod.SalesModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./content/dashboard/dashboard.module').then(
            mod => mod.DashboardModule,
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
