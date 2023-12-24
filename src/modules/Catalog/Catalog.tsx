'use client';

import Title from '@/UI/Title';
import Tabs from '@/components/Tabs';
import ProductCard from '@/components/ProductCard';
import { CATEGORIES_TABS } from './constants';

import data from '@/db/products.json';

const TestData = data.filter((product) => product.category === 'coffee');

const DEFAULT_TAB_VALUE = CATEGORIES_TABS[0].value;

export default function Catalog() {

  const tabsHandler = (value: string | string[]) => {
    console.log(value);
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center mb-[40px]">
        <Title level={2} size={2} className="max-w-[800px] text-center">
          Behind each of our cups hides an{' '}
          <span className="italic text-textAccent">amazing surprise</span>
        </Title>

        <Tabs onChange={tabsHandler} defaultValue={DEFAULT_TAB_VALUE}>
          {CATEGORIES_TABS.map(({ label, value, icon }) => (
            <Tabs.Item key={value} value={value} icon={icon}>
              {label}
            </Tabs.Item>
          ))}
        </Tabs>
      </div>

      <ul className="grid grid-cols-cards gap-[40px] mb-[100px]">
        {TestData.map(({ id, ...otherProps }) => (
          <ProductCard key={id} {...otherProps} />
        ))}
      </ul>
    </section>
  );
}
