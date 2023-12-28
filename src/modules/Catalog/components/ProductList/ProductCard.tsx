import Title from '@/UI/Title';
import Image from 'next/image';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  onClick: (id: number) => void;
}

export default function ProductCard(props: ProductCardProps) {
  const { id, name, description, price, image, onClick } = props;

  return (
    <li
      className="flex flex-col rounded-[40px] overflow-hidden border-[1px] border-borderLight cursor-pointer transition-shadow hover:shadow-lg hover:shadow-borderLight active:shadow-xl"
      onClick={() => onClick(id)}
    >
      <Image
        className="w-[100%] h-auto"
        src={image}
        width={310}
        height={310}
        sizes="310px"
        alt={`Photo of ${name}`}
      />

      <div className="grow flex flex-col p-[20px] bg-bgBody">
        <Title level={4} size={3} className="!mb-[12px]">
          {name}
        </Title>
        <p className="grow mb-[12px] max-h-[73px] overflow-hidden">
          {description}
        </p>
        <p className="heading-3">${price}</p>
      </div>
    </li>
  );
};
