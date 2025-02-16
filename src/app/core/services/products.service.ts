import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

const ELEMENT_DATA: Product[] = [
  {
    id: 1,
    name: 'S25 Ultra 12+512GB',
    price: 5399900,
    description: 'S25 Ultra 12+512GB',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/samsung-galaxy-s25-ultra-67915672d72aa.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*',
    quantity: 1,
    category: 'smartphone',
    brand: 'samsung',
  },
  {
    id: 2,
    name: 'S25 Plus 12+256GB',
    price: 4299900,
    description: 'S25 Plus 12+256GB',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/samsung-galaxy-s25-ultra-67915672d72aa.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*',
    quantity: 1,
    category: 'smartphone',
    brand: 'samsung',
  },
  {
    id: 3,
    name: 'S24 Ultra 12+512GB',
    price: 4299900,
    description: 'S24 Ultra 12+512GB',
    imageUrl:
      'https://images.samsung.com/is/image/samsung/p6pim/co/2401/gallery/co-galaxy-s24-s928-sm-s928bztultc-539325480?$684_547_PNG$',
    quantity: 1,
    category: 'smartphone',
    brand: 'samsung',
  },
  {
    id: 4,
    name: 'S24 Ultra 12+256GB',
    price: 3799900,
    description: 'S24 Ultra 12+256GB',
    imageUrl:
      'https://images.samsung.com/is/image/samsung/p6pim/co/2401/gallery/co-galaxy-s24-s928-sm-s928bztultc-539325480?$684_547_PNG$',
    quantity: 1,
    category: 'smartphone',
    brand: 'samsung',
  },
  {
    id: 5,
    name: 'Xiaomi 14T Pro 12+512GB',
    price: 2699900,
    description: 'Xiaomi 14T Pro 12+512GB',
    imageUrl: 'https://placehold.co/50x50',
    quantity: 1,
    category: 'smartphone',
    brand: 'xiaomi',
  },
  {
    id: 6,
    name: 'Xiaomi 14T 12+512GB',
    price: 2099900,
    description: 'Xiaomi 14T 12+512GB',
    imageUrl: 'https://placehold.co/50x50',
    quantity: 1,
    category: 'smartphone',
    brand: 'xiaomi',
  },
  {
    id: 7,
    name: 'Redmi Note 14 Pro Plus 5G 12+512GB',
    price: 1699900,
    description: 'Redmi Note 14 Pro Plus 5G 12+512GB',
    imageUrl: 'https://placehold.co/50x50',
    quantity: 1,
    category: 'smartphone',
    brand: 'xiaomi',
  },
  {
    id: 8,
    name: 'Redmi Note 14 Pro Plus 5G 8+256GB',
    price: 1399900,
    description: 'Redmi Note 14 Pro Plus 5G 8+256GB',
    imageUrl: 'https://placehold.co/50x50',
    quantity: 1,
    category: 'smartphone',
    brand: 'xiaomi',
  },
  {
    id: 9,
    name: 'iPhone 16 Pro Max 256GB',
    price: 4699900,
    description: 'iPhone 16 Pro Max 256GB',
    imageUrl: 'https://placehold.co/50x50',
    quantity: 1,
    category: 'smartphone',
    brand: 'apple',
  },
  {
    id: 10,
    name: 'iPhone 16 Pro 256GB',
    price: 4499900,
    description: 'iPhone 16 Pro 256GB',
    imageUrl: 'https://placehold.co/50x50',
    quantity: 1,
    category: 'smartphone',
    brand: 'apple',
  },
  {
    id: 11,
    name: 'iPhone 15 128GB',
    price: 2899900,
    description: 'iPhone 15 128GB',
    imageUrl: 'https://placehold.co/50x50',
    quantity: 1,
    category: 'smartphone',
    brand: 'apple',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  public getProducts(): Observable<Product[]> {
    return new Observable((observer) => {
      observer.next(ELEMENT_DATA);
      observer.complete();
    });
  }

  public getProduct(id: string): Observable<Product> {
    return new Observable((observer) => {
      const product = ELEMENT_DATA.find((product) => product.id === Number(id));
      observer.next(product);
      observer.complete();
    });
  }
}
