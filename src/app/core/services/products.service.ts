import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {environment} from '../../../environment/environment';
import {HttpClient} from '@angular/common/http';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private readonly url: string = `${apiUrl}/productos`;

  constructor(private readonly http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}`);
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  public createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}`, product);
  }

  public updateProduct(product: Product, id: number): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
