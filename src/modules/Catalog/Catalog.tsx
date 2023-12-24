'use client';

import Title from '@/UI/Title';
import Tabs from '@/components/Tabs';
import { CATEGORIES_TABS } from './constants';
import { useMemo } from 'react';

const DEFAULT_TAB_VALUE = CATEGORIES_TABS[0].value;

export default function Catalog() {
  const categoriesTabsMemo = useMemo(() => CATEGORIES_TABS, []);

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
          {categoriesTabsMemo.map(({ label, value, icon }) => (
            <Tabs.Item key={value} value={value} icon={icon}>
              {label}
            </Tabs.Item>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
