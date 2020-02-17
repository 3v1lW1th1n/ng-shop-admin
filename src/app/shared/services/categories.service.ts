import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface ICategory {
  name: String;
  _id: String;
}
export interface ISubcategory {
  _id: String;
  name: String;
  idCategory: String;
}
@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}
  public token: string;

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`/categories`);
  }
  public addCategories(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`/categories`, category);
  }
  public editCategories(category: ICategory): Observable<ICategory> {
    const { _id, ...body } = category;
    return this.http.put<ICategory>(`/categories/${_id}`, body);
  }
  // public deleteCategories(category: ICategory): Observable<ICategory> {
  //   return this.http.delete<ICategory>(`/categories/${category._id}`);
  // }

  public getSubcategories(): Observable<ISubcategory[]> {
    return this.http.get<ISubcategory[]>(`/categories/sub`);
  }
}