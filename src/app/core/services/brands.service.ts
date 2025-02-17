import { Injectable } from '@angular/core';
import {Brand} from '../models/Brand';
import {Observable} from 'rxjs';

const ELEMENT_DATA: Brand[] = [{ id: 1, name: 'Apple' },
  { id: 2, name: 'Samsung' },
  { id: 3, name: 'Sony' },
  { id: 4, name: 'LG' },
  { id: 5, name: 'Dell' },
  { id: 6, name: 'HP' },
  { id: 7, name: 'Lenovo' },
  { id: 8, name: 'Asus' },
  { id: 9, name: 'Acer' },
  { id: 10, name: 'Microsoft' }];

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor() { }

  public getBrands(): Observable<Brand[]> {
    return new Observable((observer) => {
      observer.next(ELEMENT_DATA);
      observer.complete();
    });
  }
}
