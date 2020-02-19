import { ProductsEffects } from 'src/app/content/products/store/effects/product.effect';
import { CategoriesEffects } from 'src/app/content/categories/store/effects/category.effect';
import { AuthEffects } from './auth.effect';

// tslint:disable-next-line: typedef
export const effects = [ProductsEffects, CategoriesEffects, AuthEffects];
