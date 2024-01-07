'use client';

import { useState, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CATEGORIES_TABS, PRODUCT_QUERY_KEY } from './constants';
import Title from '@/UI/Title';
import Tabs from '@/components/Tabs';
import ProductModal from './components/ProductModal';
import ProductList from './components/ProductList';
import Modal from '@/UI/Modal';

const DEFAULT_TAB_VALUE = CATEGORIES_TABS[0].value;

export default function Catalog() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [category, setCategory] = useState<string>(DEFAULT_TAB_VALUE);
  const [canShowModal, setCanShowModal] = useState<boolean>(
    searchParams.has(PRODUCT_QUERY_KEY)
  );
  const [productIdInModal, setProductIdInModal] = useState<string | null>(
    searchParams.get(PRODUCT_QUERY_KEY)
  );

  const closeModalHandler = () => {
    setCanShowModal(false);

    router.push(pathname, {
      scroll: false,
      shallow: false,
    });
  };

  const openModalHanlder = useCallback(
    (productId: number) => {
      setCanShowModal(true);
      setProductIdInModal(productId.toString());

      router.push(`${pathname}?${PRODUCT_QUERY_KEY}=${productId}`, {
        scroll: false,
        shallow: false,
      });
    },
    [router, pathname]
  );

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

      <ProductList category={category} onClickItem={openModalHanlder} />

      <Modal isActive={canShowModal} onClose={closeModalHandler}>
        {productIdInModal && (
          <ProductModal id={productIdInModal} closeModal={closeModalHandler} />
        )}
      </Modal>
    </section>
  );
}
