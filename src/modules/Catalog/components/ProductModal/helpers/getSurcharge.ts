import { AdditivesType, SizesType } from '@/types';

const DEFAULT_SURCHARGE = 0;

export function getSizeSurcharge(sizes: SizesType, activeTab: string): number {
  const sizesSurcharge = Object.values(sizes).find(({ size }) => size === activeTab)?.[
    'add-price'
  ];

  return sizesSurcharge ? Number(sizesSurcharge) : DEFAULT_SURCHARGE;
}

export function getAdditivesSurcharge(
  additives: AdditivesType[],
  activeTabs: string[]
): number {
  return additives.reduce((acc, next) => {
    if (activeTabs.includes(next.name)) {
      acc += Number(next['add-price']);
    }

    return acc;
  }, DEFAULT_SURCHARGE);
}
