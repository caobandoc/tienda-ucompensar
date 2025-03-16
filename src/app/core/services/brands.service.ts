import { Injectable } from '@angular/core';
import {Brand} from '../models/Brand';
import {Observable} from 'rxjs';
import {environment} from '../../../environment/environment';
import {HttpClient} from '@angular/common/http';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private readonly url: string = `${apiUrl}/marca`;

  constructor(private readonly http: HttpClient) { }

  public getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.url}`);
  }

  public createBrand(brand: Brand): Observable<any> {
    return this.http.post(this.url, brand);
  }

  public updateBrand(brand: Brand, id: number): Observable<any> {
    return this.http.put(`${this.url}/${id}`, brand);
  }

  public deleteBrand(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
