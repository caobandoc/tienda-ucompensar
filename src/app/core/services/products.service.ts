import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';


const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly url: string = `${apiUrl}/productos`;
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}`);
  }

  public createProduct(product : Product): Observable<any>{
    return this.http.post(this.url, product);
  }

  public updateProduct(product: Product, id: number): Observable<any>{
    return this.http.put(`${this.url}/${id}`, product);
  }
  /*public getProduct(id: string): Observable<Product> {
    return new Observable((observer) => {
      const product = ELEMENT_DATA.find((product) => product.id === Number(id));
      observer.next(product);
      observer.complete();
    });
  }*/
}
