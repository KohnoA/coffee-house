import { IProduct } from '@/types';
import ProductCard from './ProductCard';
import { useQuery } from '@/hooks';
import { API_PRODUCTS_ENDPOINT } from '@/constants';
import ProductListSkeleton from './ProductListSkeleton';
import { memo } from 'react';

interface ProductListProps {
  category: string;
  onClickItem: (id: number) => void;
}

function ProductList({ category, onClickItem }: ProductListProps) {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<IProduct[]>(`${API_PRODUCTS_ENDPOINT}?category=${category}`);

  if (isLoading) {
    return <ProductListSkeleton />;
  }

  if (error) {
    return (
      <p className="text-center mt-[100px] mb-[100px] font-bold text-2xl md:text-md">
        An error occurred, please try later
      </p>
    );
  }

  if (products) {
    return (
      <ul className="grid grid-cols-cards gap-[40px] mb-[100px] lg:px-[14px] md:px-[19px]">
        {products.map((product) => (
          <ProductCard key={product.id} onClick={onClickItem} {...product} />
        ))}
      </ul>
    );
  }

  return null;
}

export default memo(ProductList);
