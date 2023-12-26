'use client';

import Modal from '@/UI/Modal';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { memo, useEffect, useState } from 'react';
import { PRODUCT_QUERY_KEY } from '../../constants';
import ProductModalContent from './ProductModalContent';

function ProductModal() {
  const [productId, setProductId] = useState<string>();
  const [isActive, setIsActive] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const closeModalHandler = () => {
    const params = new URLSearchParams(searchParams);

    setIsActive(false);
    params.delete(PRODUCT_QUERY_KEY);
    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
      shallow: false,
    });
  };

  useEffect(() => {
    if (searchParams.has(PRODUCT_QUERY_KEY)) {
      setIsActive(true);
      setProductId(searchParams.get(PRODUCT_QUERY_KEY) as string);
    }
  }, [searchParams]);

  return (
    <Modal isActive={isActive} onClose={closeModalHandler}>
      {productId && <ProductModalContent productId={productId} />}
    </Modal>
  );
}

export default memo(ProductModal);
