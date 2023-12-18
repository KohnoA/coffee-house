import { Slider, SliderItem } from '@/UI/Slider';
import Title from '@/UI/Title';
import Image from 'next/image';
import { getCorrectPrice } from '@/helpers';
import newProductsData from '@/db/newProducts.json';

export default function NewProducts() {
  return (
    <section>
      <Title className="text-center" level={2} size={2}>
        Try our <span className="italic text-textAccent">new</span> products
      </Title>

      <Slider>
        {newProductsData.map(({ id, image, name, description, price }) => (
          <SliderItem key={id}>
            <div className="max-w-[480px] text-center cursor-pointer">
              <Image
                src={image}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                width={480}
                height={480}
                sizes="480px"
                alt={`Image of ${name}`}
              />

              <Title className="!mb-[16px]" level={4} size={3}>
                {name}
              </Title>

              <p className="mb-[16px]">{description}</p>

              <p className="heading-3">{getCorrectPrice(price)}</p>
            </div>
          </SliderItem>
        ))}
      </Slider>
    </section>
  );
}
