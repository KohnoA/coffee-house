import { Slider, SliderItem } from '@/UI/Slider';
import Title from '@/UI/Title';
import NewProductCard from './components/NewProductCard';
import { NEW_PRODUCTS } from './db';
import { MAIN_SECTIONS_ID } from '@/constants/routes';

export default function NewProducts() {
  return (
    <section id={MAIN_SECTIONS_ID.NEW_PRODUCTS}>
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
