import { AuthEffects } from './auth.effect';
import { ProductsEffects } from '@store-product/effects/product.effect';
import { CategoriesEffects } from '@store-category/effects/category.effect';

// tslint:disable-next-line: typedef
export const effects = [ProductsEffects, CategoriesEffects, AuthEffects];
