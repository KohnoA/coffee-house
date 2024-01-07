import { IProduct } from '@/types';

export interface ProductsApiResponse {
  total: number;
  products: IProduct[];
}