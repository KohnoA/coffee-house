import { IProduct } from '@/types';
import { API_PRODUCTS_ENDPOINT } from './constants';

export async function getProductById(id: number | string): Promise<IProduct> {
  const response = await fetch(`${API_PRODUCTS_ENDPOINT}/${id}`);

  if (!response.ok) {
    throw new Error('Unable to fetch products');
  }

  return response.json();
}