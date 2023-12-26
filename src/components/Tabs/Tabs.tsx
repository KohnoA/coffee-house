'use client';

import { ReactNode, memo, useState } from 'react';
import Item from './Item';
import { useEffectWithoutMount } from '@/hooks';

interface TabsProps {
  multiply?: boolean;
  defaultValue?: string | string[];
  className?: string;
  items: { label: string; value: string; icon?: string | ReactNode }[];
  onChange: (value: string | string[]) => void;
}

const DEFAULT_VALUE_FOR_TABS = '';

function Tabs(props: TabsProps) {
  const { multiply = false, defaultValue, items, className, onChange } = props;

  const [activeTabs, setActiveTabs] = useState<string | string[]>(
    defaultValue ?? DEFAULT_VALUE_FOR_TABS
  );

  const setActiveTabsHandler = (value: string) => {
    if (multiply) {
      if (Array.isArray(activeTabs)) {
        setActiveTabs([...activeTabs, value]);
      } else {
        setActiveTabs([activeTabs, value]);
      }
    } else {
      setActiveTabs(value);
    }
  };

  const filterActiveTabsHanlder = (value: string) => {
    if (Array.isArray(activeTabs)) {
      const filteredActiveTabs = activeTabs.filter((tab) => tab !== value);

      setActiveTabs(
        filteredActiveTabs.length ? filteredActiveTabs : DEFAULT_VALUE_FOR_TABS
      );
    } else {
      setActiveTabs(DEFAULT_VALUE_FOR_TABS);
    }
  };

  const onClickHandler = (value: string) => {
    const isActiveValue = activeTabs.includes(value);

    if (!multiply && isActiveValue) return;

    if (isActiveValue) {
      filterActiveTabsHanlder(value);
    } else {
      setActiveTabsHandler(value);
    }
  };

  useEffectWithoutMount(() => {
    onChange(activeTabs);
  }, [activeTabs, onChange]);

  return (
    <ul className={`flex gap-[16px] ${className ?? ''}`}>
      {items.map(({ value, ...otherProps }) => (
        <Item
          key={value}
          value={value}
          onClick={onClickHandler}
          isActive={activeTabs.includes(value)}
          {...otherProps}
        />
      ))}
    </ul>
  );
}

export default memo(Tabs);
