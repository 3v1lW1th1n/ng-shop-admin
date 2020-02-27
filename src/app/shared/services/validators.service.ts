import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsService } from './products.service';
import { of } from 'rxjs';

@Injectable()
export class ValidatorsService {
  constructor(public productsService: ProductsService) {}

  public isValid: boolean;
  public nameValidator({ value }: FormControl) {
    const isInvalid =
      value.toLowerCase() === 'samsung'.toLowerCase()
        ? { nameExist: true }
        : null;

    return of(isInvalid);
  }
}
