import { Injectable } from '@angular/core';
import {Category} from '../models/Category';
import {Observable} from 'rxjs';
import {environment} from '../../../environment/environment';
import {HttpClient} from '@angular/common/http';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly url: string = `${apiUrl}/categoria`;

  constructor(private readonly http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}`);
  }

  public createCategory(category: Category): Observable<any> {
    return this.http.post(this.url, category);
  }

  public updateCategory(category: Category, id: number): Observable<any> {
    return this.http.put(`${this.url}/${id}`, category);
  }

  public deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
