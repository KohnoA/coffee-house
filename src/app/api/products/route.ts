import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from './db';

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  if (params.has('category')) {
    const category = params.get('category');
    const response = PRODUCTS.filter(
      (product) => product.category === category
    );

    return !!response.length
      ? NextResponse.json(response)
      : NextResponse.json(
          { error: 'This category of products not found' },
          { status: 404 }
        );
  }

  return NextResponse.json(PRODUCTS);
}
