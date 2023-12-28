import { memo } from 'react';
import { useQuery } from '@/hooks';
import { IProduct } from '@/types';
import { API_PRODUCTS_ENDPOINT } from '@/constants';
import ProductModalContent from './ProductModalContent';
import ProductModalSkeleton from './ProductModalSkeleton';

interface ProductModalProps {
  id: string | number;
  closeModal: () => void;
}

function ProductModal({ id, closeModal }: ProductModalProps) {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery<IProduct>(`${API_PRODUCTS_ENDPOINT}/${id}`);

  if (isLoading) {
    return <ProductModalSkeleton />;
  }

  if (error) {
    return (
      <p className="text-center mt-[100px] mb-[100px] font-bold text-2xl">
        An error occurred, please try later
      </p>
    );
  }

  if (!product) {
    return null;
  }

  return <ProductModalContent {...product} closeModal={closeModal} />;
}

export default memo(ProductModal);
