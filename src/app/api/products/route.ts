import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from './db';

const PARAM_KEY_CATEGORY = 'category';
const PARAM_KEY_LIMIT = 'limit';
const PARAM_KEY_PAGE = 'page';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 8;

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  let products = PRODUCTS;
  let totalCount = PRODUCTS.length;

  if (params.has(PARAM_KEY_CATEGORY)) {
    const category = params.get(PARAM_KEY_CATEGORY) as string;

    products = products.filter((product) => product.category === category);
    totalCount = products.length
  }

  if (params.has(PARAM_KEY_PAGE) || params.has(PARAM_KEY_LIMIT)) {
    const page = Number(params.get(PARAM_KEY_PAGE) ?? DEFAULT_PAGE);
    const limit = Number(params.get(PARAM_KEY_LIMIT) ?? DEFAULT_LIMIT);

    const from = limit * (page - 1);
    const to = limit * page;

    products = products.slice(from, to);
  }

  return NextResponse.json({ total: totalCount, products });
}
