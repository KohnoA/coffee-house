import { NextRequest, NextResponse } from 'next/server';
import productsData from '@/db/products.json';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  if (params.has('category')) {
    const category = params.get('category');
    const response = productsData.filter(
      (product) => product.category === category
    );

    return !!response.length
      ? NextResponse.json(response)
      : NextResponse.json({ error: 'This category not found' }, { status: 404 });
  }

  if (params.has('id')) {
    const id = params.get('id');
    const response = productsData.find((product) => String(product.id) === id);

    return !!response
      ? NextResponse.json(response)
      : NextResponse.json(
          { error: 'A product with this ID does not exist' },
          { status: 404 }
        );
  }

  return NextResponse.json(productsData);
}
