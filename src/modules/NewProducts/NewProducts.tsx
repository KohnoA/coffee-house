import { Slider, SliderItem } from '@/UI/Slider';
import Title from '@/UI/Title';
import NewProductCard from './components/NewProductCard';
import { NEW_PRODUCTS } from './db';

export default function NewProducts() {
  return (
    <section>
      <Title className="text-center" level={2} size={2}>
        Try our <span className="italic text-textAccent">new</span> products
      </Title>

      <Slider>
        {NEW_PRODUCTS.map(({ id, ...otherProps }) => (
          <SliderItem key={id}>
            <NewProductCard {...otherProps} />
          </SliderItem>
        ))}
      </Slider>
    </section>
  );
}
