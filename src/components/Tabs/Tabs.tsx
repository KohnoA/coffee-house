'use client';

import { ReactNode, useEffect, useState } from 'react';
import { TabsContext } from './context';
import Item from './Item';
import { DEFAULT_VALUE_FOR_TABS } from './constants';

interface TabsProps {
  children: ReactNode;
  multiply?: boolean;
  defaultValue?: string | string[];
  className?: string;
  onChange: (value: string | string[]) => void;
}

export default function Tabs(props: TabsProps) {
  const {
    children,
    multiply = false,
    defaultValue,
    className,
    onChange,
  } = props;

  const [activeTabs, setActiveTabs] = useState<string | string[]>(
    defaultValue ?? DEFAULT_VALUE_FOR_TABS
  );

  useEffect(() => {
    onChange(activeTabs);
  }, [activeTabs, onChange]);

  return (
    <TabsContext.Provider value={{ activeTabs, multiply, setActiveTabs }}>
      <ul className={`flex gap-[16px] ${className ?? ''}`}>{children}</ul>
    </TabsContext.Provider>
  );
}

Tabs.Item = Item;
