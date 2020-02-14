import { MatTableDataSource } from '@angular/material/table';
import { Injectable } from '@angular/core';
import { ValidationErrors, FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from './products.service';
import { of } from 'rxjs';

@Injectable()
export class ValidatorsService {
  constructor(public productsService: ProductsService) {}
  public data: any;
  public isValid: any;
  public nameValidator({ value }: FormControl) {
    const isInvalid =
      value.toLowerCase() === 'samsung'.toLowerCase()
        ? { nameExist: true }
        : null;
    console.log(isInvalid);
    return of(isInvalid);
  }
}
