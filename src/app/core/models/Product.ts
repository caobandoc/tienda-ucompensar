import {Category} from './Category';
import {Brand} from './Brand';

export interface Product{
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;
  category: Category | undefined;
  brand: Brand | undefined;
}
