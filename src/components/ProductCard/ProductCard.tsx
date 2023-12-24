'use client';

import Title from '@/UI/Title';
import { DOLLAR_SYMBOL } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function ProductCard(props: ProductCardProps) {
  const { name, description, price, image } = props;

  return (
    <li className="rounded-[40px] overflow-hidden border-[1px] border-borderLight transition-shadow hover:shadow-lg hover:shadow-borderLight active:shadow-xl">
      <Link
        href={{ query: { product: name } }}
        scroll={false}
        className="w-[100%] h-[100%] flex flex-col"
      >
        <Image
          className="w-[100%] h-auto"
          src={image}
          width={310}
          height={310}
          sizes="310px"
          alt={`Photo of ${name}`}
        />

        <div className="grow flex flex-col p-[20px]">
          <Title level={4} size={3} className="!mb-[20px]">
            {name}
          </Title>
          <p className="grow mb-[12px] max-h-[73px] overflow-hidden">
            {description}
          </p>
          <p className="heading-3">
            {DOLLAR_SYMBOL}
            {price}
          </p>
        </div>
      </Link>
    </li>
  );
}
