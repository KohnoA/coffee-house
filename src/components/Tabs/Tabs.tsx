'use client';

import { ReactNode, memo, useState } from 'react';
import Item from './Item';

interface TabsOwnProps {
  className?: string;
  items: { label: string; value: string; icon?: string | ReactNode }[];
}

type MultiplyTabsProps = TabsOwnProps & {
  multiply: true;
  defaultValue?: string[];
  onChange: (value: string[]) => void;
};

type NonMultiplyTabsProps = TabsOwnProps & {
  multiply?: never;
  defaultValue?: string;
  onChange: (value: string) => void;
};

type TabsProps = MultiplyTabsProps | NonMultiplyTabsProps;

const DEFAULT_VALUE_FOR_TABS: string = '';
const DEFAULT_VALUE_FOR_MULTIPLY_TABS: string[] = [];

function Tabs(props: TabsProps) {
  const { multiply, defaultValue, items, className, onChange } = props;

  const [activeTabs, setActvieTabs] = useState<string | string[]>(() => {
    if (multiply) return defaultValue ?? DEFAULT_VALUE_FOR_MULTIPLY_TABS;
    else return defaultValue ?? DEFAULT_VALUE_FOR_TABS;
  });

  const addActiveTab = (value: string) => {
    const newActiveTabs = multiply
      ? [...(activeTabs as string[]), value]
      : value;

    setActvieTabs(newActiveTabs);
    onChange(newActiveTabs as string & string[]);
  };

  const removeActiveTab = (value: string) => {
    const filteredActiveTabs = (activeTabs as string[]).filter(
      (tab) => tab !== value
    );

    setActvieTabs(filteredActiveTabs);
    onChange(filteredActiveTabs as string & string[]);
  };

  const onClickHandler = (value: string) => {
    const isActiveValue = activeTabs.includes(value);

    if (!multiply && isActiveValue) return;

    if (isActiveValue) removeActiveTab(value);
    else addActiveTab(value);
  };

  return (
    <ul className={`flex flex-wrap gap-[16px] sm:gap-[8px] ${className ?? ''}`}>
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
