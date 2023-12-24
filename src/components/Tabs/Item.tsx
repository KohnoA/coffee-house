import Button from '@/UI/Button';
import { ReactNode, useContext, useState } from 'react';
import { TabsContext } from './context';
import { useEffectWithoutMount } from '@/hooks';
import { DEFAULT_VALUE_FOR_TABS } from './constants';

interface ItemProps {
  icon?: ReactNode;
  children: string;
  value: string;
}

export default function Item({ value, icon, children }: ItemProps) {
  const { activeTabs, multiply, setActiveTabs } = useContext(TabsContext);
  const [isActive, setIsActive] = useState<boolean>(activeTabs.includes(value));

  const setActiveTabsHandler = () => {
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

  const filterActiveTabsHanlder = () => {
    if (Array.isArray(activeTabs)) {
      const filteredActiveTabs = activeTabs.filter((tab) => tab !== value);

      setActiveTabs(
        filteredActiveTabs.length ? filteredActiveTabs : DEFAULT_VALUE_FOR_TABS
      );
    } else {
      setActiveTabs(DEFAULT_VALUE_FOR_TABS);
    }
  };

  const onClickHandler = () => {
    if (!multiply && isActive) return;

    if (isActive) {
      filterActiveTabsHanlder();
    } else {
      setActiveTabsHandler();
    }
  };

  useEffectWithoutMount(() => {
    setIsActive(activeTabs.includes(value));
  }, [activeTabs, value]);

  return (
    <li>
      <Button
        onClick={onClickHandler}
        className={`group flex items-center gap-[8px] py-[8px] pl-[8px] pr-[16px] border-borderLight hover:border-bgContainer ${
          isActive ? 'text-textLight !bg-bgContainer !border-bgContainer' : ''
        }`}
      >
        {icon && (
          <span
            className={`flex justify-center items-center w-[30px] h-[30px] p-[5px] rounded-full transition-colors bg-borderLight group-hover:bg-bgBody ${
              isActive ? '!bg-bgBody' : ''
            }`}
          >
            {icon}
          </span>
        )}{' '}
        {children}
      </Button>
    </li>
  );
}
