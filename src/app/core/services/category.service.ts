import { Injectable } from '@angular/core';
import {Category} from '../models/Category';
import {Observable} from 'rxjs';

const ELEMENT_DATA: Category[] = [
  { id: 0, name:  'a' },
  { id: 1, name:  'b' },
  { id: 2, name:  'c' },
  { id: 3, name:  'd' },
  { id: 4, name:  'e' },
  { id: 5, name:  'f' },
  { id: 6, name:  'g' },
  { id: 7, name:  'h' },
  { id: 8, name:  'i' },
  { id: 9, name:  'j' },
  { id: 10, name:  'k' },
]

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  public getCategories(): Observable<Category[]> {
    return new Observable((observer) => {
      observer.next(ELEMENT_DATA);
      observer.complete();
    });
  }
}
