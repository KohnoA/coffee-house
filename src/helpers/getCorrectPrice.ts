import { DOLLAR_SYMBOL } from '@/constants';

export function getCorrectPrice(num: number, currency: string = DOLLAR_SYMBOL): string {
  const [whole, hundredth] = String(num).split('.');

  return `${currency}${whole}.${hundredth ? hundredth.padEnd(2, '0') : '00'}`;
}