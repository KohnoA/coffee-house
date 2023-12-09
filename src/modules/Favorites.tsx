import { Slider, SliderItem } from '@/UI/Slider';
import Title from '@/UI/Title';
import Image from 'next/image';
import { getCorrectPrice } from '@/helpers';

import sliderImg1 from '@/../public/images/coffee-slider-1.png';
import sliderImg2 from '@/../public/images/coffee-slider-2.png';
import sliderImg3 from '@/../public/images/coffee-slider-3.png';

const SLIDER_DATA = [
  {
    id: 1,
    img: sliderImg1,
    name: 'S’mores Frappuccino',
    description:
      'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
    price: 5.5,
  },
  {
    id: 2,
    img: sliderImg2,
    name: 'Caramel Macchiato',
    description:
      'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
    price: 5,
  },
  {
    id: 3,
    img: sliderImg3,
    name: 'Ice coffee',
    description:
      'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
    price: 4.5,
  },
];

export default function Favorites() {
  return (
    <section>
      <Title className="text-center" level={2} size={2}>
        Choose your <span className="italic text-textAccent">favorite</span>{' '}
        coffee
      </Title>

      <Slider>
        {SLIDER_DATA.map(({ id, img, name, description, price }) => (
          <SliderItem key={id}>
            <div className="max-w-[480px] text-center">
              <Image
                src={img}
                placeholder="blur"
                blurDataURL={img.blurDataURL}
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
