'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CATEGORIES_TABS, PRODUCT_QUERY_KEY } from './constants';
import Title from '@/UI/Title';
import Tabs from '@/components/Tabs';
import ProductModal from './components/ProductModal';
import ProductList from './components/ProductList';
import Modal from '@/UI/Modal';

const DEFAULT_TAB_VALUE = CATEGORIES_TABS[0].value;

//TODO: Optimization

export default function Catalog() {
  const [category, setCategory] = useState(DEFAULT_TAB_VALUE);
  const [canShowModal, setCanShowModal] = useState<boolean>(false);
  const [productIdInModal, setProductIdInModal] = useState<string>();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const closeModalHandler = () => {
    const params = new URLSearchParams(searchParams);

    setCanShowModal(false);
    params.delete(PRODUCT_QUERY_KEY);
    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
      shallow: false,
    });
  };

  useEffect(() => {
    if (searchParams.has(PRODUCT_QUERY_KEY)) {
      setCanShowModal(true);
      setProductIdInModal(searchParams.get(PRODUCT_QUERY_KEY) as string);
    }
  }, [searchParams]);

  return (
    <section>
      <div className="flex flex-col justify-center items-center mb-[40px]">
        <Title level={2} size={2} className="max-w-[800px] text-center">
          Behind each of our cups hides an{' '}
          <span className="italic text-textAccent">amazing surprise</span>
        </Title>

        <Tabs
          onChange={setCategory}
          defaultValue={DEFAULT_TAB_VALUE}
          items={CATEGORIES_TABS}
        />
      </div>

      <ProductList category={category} />

      <Modal isActive={canShowModal} onClose={closeModalHandler}>
        {productIdInModal && (
          <ProductModal id={productIdInModal} closeModal={closeModalHandler} />
        )}
      </Modal>
    </section>
  );
}
