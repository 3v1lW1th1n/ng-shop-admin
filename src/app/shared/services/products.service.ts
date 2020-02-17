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
  public token: string;

  public getProducts(text): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`/products?text=${text}`);
  }
  public addProducts(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`/products`, product);
  }
  public editProducts(product: IProduct): Observable<IProduct> {
    const { _id, ...body } = product;
    return this.http.put<IProduct>(`/products/${_id}`, body);
  }
  public deleteProducts(product: IProduct): Observable<IProduct> {
    return this.http.delete<IProduct>(`/products/${product._id}`);
  }
}
