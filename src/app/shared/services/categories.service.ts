import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ICategory,
  ISubcategory,
} from 'src/app/content/categories/store/reducers/category.reducer';

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
  public deleteCategory(category: ICategory): Observable<ICategory> {
    return this.http.delete<ICategory>(`/categories/${category._id}`);
  }
  // SubCategories
  public addSubCategory(subCategory: ISubcategory): Observable<ISubcategory> {
    return this.http.post<ISubcategory>(`/subcategories`, subCategory);
  }
  public editSubCategory(subCategory: ISubcategory): Observable<ISubcategory> {
    const { _id, ...body } = subCategory;
    return this.http.put<ISubcategory>(`/subcategories/${_id}`, body);
  }
  public deleteSubCategory(
    subCategory: ISubcategory,
  ): Observable<ISubcategory> {
    return this.http.delete<ISubcategory>(`/subcategories/${subCategory._id}`);
  }
}
