import { NextResponse } from 'next/server';
import products from '@/assets/data/products.json';

export async function GET(request: Request) {
  return NextResponse.json(products);
}