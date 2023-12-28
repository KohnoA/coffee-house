export function getTotalPriceStr(...prices: (number | string)[]): string {
  const totalPrice = prices
    .map((price) => {
      const priceNumber = +price;

      if (isNaN(priceNumber)) {
        throw new Error('Invalid string value');
      } else {
        return priceNumber;
      }
    })
    .reduce((acc, next) => (acc += next), 0);

  const [whole, hundredth] = String(totalPrice).split('.');

  return `${whole}.${hundredth ? hundredth.padEnd(2, '0') : '00'}`;
}