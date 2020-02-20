import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/content/products/store/reducers/product.reducer';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}
  public token: string;

  public getProducts({ text, page }: any): Observable<IProduct[]> {
    const query = text ? `text=${text}&page=${page}` : '';
    return this.http.get<IProduct[]>(`/products?${query}`);
  }
  public addProducts(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`/products`, product);
  }
  public editProducts(product: IProduct): Observable<IProduct> {
    const { _id, ...body } = product;
    // console.log(body);
    return this.http.put<IProduct>(`/products/${_id}`, body);
  }
  public deleteProducts(product: IProduct): Observable<IProduct> {
    return this.http.delete<IProduct>(`/products/${product._id}`);
  }
}
