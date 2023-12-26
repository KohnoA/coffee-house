'use client';

import Title from '@/UI/Title';
import Tabs from '@/components/Tabs';
import { CATEGORIES_TABS } from './constants';
// import ProductCard from './components/ProductCard';
// import ProductModal from './components/ProductModal';

import { useCallback, useMemo, useState } from 'react';
import ProductList from './components/ProductList';

const DEFAULT_TAB_VALUE = CATEGORIES_TABS[0].value;

export default function Catalog() {
  const [category, setCategory] = useState(DEFAULT_TAB_VALUE);

  const categoriesTabs = useMemo(() => CATEGORIES_TABS, []);

  const tabsHandler = useCallback((value: string | string[]) => {
    setCategory(value.toString());
  }, []);

  return (
    <section>
      <div className="flex flex-col justify-center items-center mb-[40px]">
        <Title level={2} size={2} className="max-w-[800px] text-center">
          Behind each of our cups hides an{' '}
          <span className="italic text-textAccent">amazing surprise</span>
        </Title>

        <Tabs
          onChange={tabsHandler}
          defaultValue={DEFAULT_TAB_VALUE}
          items={categoriesTabs}
        />
      </div>

      <ProductList category={category} />

      {/* <ProductModal /> */}
    </section>
  );
}
