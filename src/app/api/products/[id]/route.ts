import { NextResponse } from 'next/server';
import { PRODUCTS } from '../db';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const product = PRODUCTS.find((product) => String(product.id) === id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}