import { createContext } from 'react';
import { DEFAULT_VALUE_FOR_TABS } from './constants';

interface TabsContextType {
  activeTabs: string | string[];
  multiply?: boolean;
  setActiveTabs: (value: string | string[]) => void;
}

const initialTabsContext: TabsContextType = {
  activeTabs: DEFAULT_VALUE_FOR_TABS,
  setActiveTabs() {},
};

export const TabsContext = createContext(initialTabsContext);
