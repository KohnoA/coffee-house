import { getProductById } from '@/services';
import { IProduct } from '@/types';
import useSWR from 'swr';
import Image from 'next/image';
import Title from '@/UI/Title';
import Tabs from '@/components/Tabs';

interface ProductModalContentProps {
  productId: string;
}

export default function ProductModalContent({
  productId,
}: ProductModalContentProps) {
  const { data, isLoading, error } = useSWR<IProduct>(
    productId,
    getProductById
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    data && (
      <section className="flex gap-[20px]">
        <Image
          className="rounded-[40px]"
          src={data.image}
          width={310}
          height={310}
          sizes="310px"
          alt={`Photo of ${data.name}`}
        />

        <div className="max-w-[438px]">
          <Title level={4} size={3} className="!mb-[12px]">
            {data.name}
          </Title>

          <p className="mb-[20px]">{data.description}</p>

          <div className="mb-[20px]">
            <p className="mb-[8px]">Size</p>

            <Tabs onChange={() => console.log('change')}>
              {Object.entries(data.sizes).map(([size, info]) => (
                <Tabs.Item key={size} icon={size.toUpperCase()} value={size}>
                  {info.size}
                </Tabs.Item>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    )
  );
}
