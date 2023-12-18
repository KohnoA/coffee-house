import Image from 'next/image';
import Title from '@/UI/Title';
import { getCorrectPrice } from '@/helpers';

interface NewProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

export default function NewProductCard({
  image,
  name,
  description,
  price,
}: NewProductCardProps) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        width={480}
        height={480}
        sizes="480px"
        alt={`Image of ${name}`}
      />

      <Title className="!mb-[16px]" level={4} size={3}>
        {name}
      </Title>

      <p className="max-w-[480px] text-center mb-[16px]">{description}</p>

      <p className="heading-3">{getCorrectPrice(price)}</p>
    </div>
  );
}
