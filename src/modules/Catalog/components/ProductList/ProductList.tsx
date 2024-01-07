import { memo, useEffect, useState } from 'react';
import { API_PRODUCTS_ENDPOINT } from '@/constants';
import { useQuery } from '@/hooks';
import ProductCard from './ProductCard';
import Button from '@/UI/Button';
import RefreshIcon from '@/components/icons/RefreshIcon';
import ProductCardSkeleton from './ProductCardSkeleton';
import { ProductsApiResponse } from './types';

export interface ProductListProps {
  category: string;
  onClickItem: (id: number) => void;
}

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 8;

function ProductList({ category, onClickItem }: ProductListProps) {
  const [page, setPage] = useState<number>(DEFAULT_PAGE);

  const { data, isLoading, error } = useQuery<ProductsApiResponse>(
    `${API_PRODUCTS_ENDPOINT}?category=${category}&page=${page}&limit=${DEFAULT_LIMIT}`
  );
  const { total, products } = data ?? { total: DEFAULT_LIMIT, products: [] };
  const canShowSwitchButton = total > products.length;

  const switchPageHandler = () => {
    const maxPageCount = Math.ceil(total / DEFAULT_LIMIT);

    setPage((prev) => (prev === maxPageCount ? 1 : prev + 1));
  };

  useEffect(() => {
    setPage(DEFAULT_PAGE);
  }, [category]);

  if (error) {
    return (
      <p className="text-center mt-[100px] mb-[100px] font-bold text-2xl md:text-md">
        An error occurred, please try later
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-cards gap-[40px] mb-[100px] lg:px-[14px] md:px-[19px]">
      {isLoading
        ? new Array(DEFAULT_LIMIT)
            .fill(DEFAULT_LIMIT)
            .map((_, index) => <ProductCardSkeleton key={index} />)
        : products.map((product) => (
            <ProductCard key={product.id} onClick={onClickItem} {...product} />
          ))}

      {canShowSwitchButton && (
        <li className="col-span-full place-self-center">
          <Button
            onClick={switchPageHandler}
            disabled={isLoading}
            className="group disabled:opacity-80"
            rounded
          >
            <RefreshIcon
              width={24}
              height={24}
              className={`transition-colors group-hover:stroke-bgBody ${
                isLoading ? 'animate-spin' : ''
              }`}
            />
          </Button>
        </li>
      )}
    </ul>
  );
}

export default memo(ProductList);
