import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IProduct {
  _id: String;
  name: String;
  description: String;
  price: number;
  status: boolean;
}
@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  public get getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`/products`);
  }
}
