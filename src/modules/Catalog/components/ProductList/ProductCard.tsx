import Title from '@/UI/Title';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PRODUCT_QUERY_KEY } from '../../constants';
import { memo } from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

function ProductCard(props: ProductCardProps) {
  const { id, name, description, price, image } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onClickHandler = () => {
    const params = new URLSearchParams(searchParams);

    params.set(PRODUCT_QUERY_KEY, id.toString());
    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
      shallow: false,
    });
  };

  return (
    <li
      className="flex flex-col rounded-[40px] overflow-hidden border-[1px] border-borderLight cursor-pointer transition-shadow hover:shadow-lg hover:shadow-borderLight active:shadow-xl"
      onClick={onClickHandler}
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
}

export default memo(ProductCard);
