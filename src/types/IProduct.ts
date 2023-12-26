type SizesType = Record<
  's' | 'm' | 'l',
  { size: string; 'add-price': 'string' }
>;
type AdditivesType = { name: string; 'add-price': string };

export interface IProduct {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  category: string;
  sizes: SizesType;
  additives: AdditivesType[];
}
