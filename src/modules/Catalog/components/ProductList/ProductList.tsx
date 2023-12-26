import { IProduct } from '@/types';
import ProductCard from './ProductCard';
import { useQuery } from '@/hooks';
import { API_PRODUCTS_ENDPOINT } from '@/constants';
import ProductListSkeleton from './ProductListSkeleton';

interface ProductListProps {
  category: string;
}

export default function ProductList({ category }: ProductListProps) {
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
      <p className="text-center mt-[100px] mb-[100px] font-bold text-2xl">
        An error occurred, please try later
      </p>
    );
  }

  if (products) {
    return (
      <ul className="grid grid-cols-cards gap-[40px] mb-[100px]">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    );
  }

  return null;
}
