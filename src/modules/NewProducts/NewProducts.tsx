import { Slider, SliderItem } from '@/UI/Slider';
import Title from '@/UI/Title';
import newProductsData from '@/db/newProducts.json';
import NewProductCard from './components/NewProductCard';

export default function NewProducts() {
  return (
    <section>
      <Title className="text-center" level={2} size={2}>
        Try our <span className="italic text-textAccent">new</span> products
      </Title>

      <Slider>
        {newProductsData.map(({ id, ...otherProps }) => (
          <SliderItem key={id}>
            <NewProductCard {...otherProps} />
          </SliderItem>
        ))}
      </Slider>
    </section>
  );
}
