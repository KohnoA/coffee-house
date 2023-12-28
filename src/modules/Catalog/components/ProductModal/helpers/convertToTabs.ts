import { SizesType, AdditivesType } from '@/types';

export function convertSizesToTabs(sizes: SizesType) {
  return Object.entries(sizes).map(([size, info]) => ({
    icon: size.toUpperCase(),
    value: info.size,
    label: info.size,
  }));
}

export function convertAdditivesToTabs(additives: AdditivesType[]) {
  return additives.map((additive, index) => ({
    icon: index + 1,
    value: additive.name,
    label: additive.name,
  }));
}
