import { useState } from 'react';
import Image from 'next/image';
import Title from '@/UI/Title';
import Button from '@/UI/Button';
import Tabs from '@/components/Tabs';
import InfoIcon from '@/components/icons/InfoIcon';
import { IProduct } from '@/types';
import { useUrlParams } from './hooks';
import {
  convertAdditivesToTabs,
  convertSizesToTabs,
  getSizeSurcharge,
  getAdditivesSurcharge,
  getTotalPriceStr,
} from './helpers';

type ProductModalContentProps = Omit<IProduct, 'id' | 'category'> & {
  closeModal: () => void;
};

const DEFAULT_SURCHARGE = 0;
const SIZE_QUERY_KEY = 'size';
const ADDITIVES_QUERY_KEY = 'additives';

export default function ProductModalContent(props: ProductModalContentProps) {
  const { closeModal, sizes, additives, price, ...product } = props;
  const sizeTabs = convertSizesToTabs(sizes);
  const additiveTabs = convertAdditivesToTabs(additives);
  const DEFAULT_SIZE_VALUE = sizeTabs[0].value;

  const [sizeParam, setSizeParam] = useUrlParams(SIZE_QUERY_KEY);
  const [additivesParamStr, setAdditivesParam] = useUrlParams(ADDITIVES_QUERY_KEY);
  const additivesParam = additivesParamStr?.split(' ');

  const [sizeSurcharge, setSizeSurcharge] = useState<number>(
    sizeParam ? getSizeSurcharge(sizes, sizeParam) : DEFAULT_SURCHARGE
  );
  const [additiveSurcharge, setAdditiveSurcharge] = useState<number>(
    additivesParam ? getAdditivesSurcharge(additives, additivesParam) : DEFAULT_SURCHARGE
  );

  const onChangeSize = (value: string) => {
    setSizeSurcharge(getSizeSurcharge(sizes, value));
    setSizeParam(value);
  };

  const onChangeAdditives = (value: string[]) => {
    setAdditiveSurcharge(getAdditivesSurcharge(additives, value));
    setAdditivesParam(value.join(' '));
  };

  return (
    <section className="flex items-start gap-[20px]">
      <Image
        className="rounded-[40px] shrink-0"
        src={product.image}
        width={310}
        height={310}
        sizes="310px"
        alt={`Photo of ${product.name}`}
      />

      <div className="max-w-[438px]">
        <Title level={4} size={3} className="!mb-[12px]">
          {product.name}
        </Title>

        <p className="mb-[20px]">{product.description}</p>

        <div className="mb-[20px]">
          <p className="mb-[8px]">Size</p>

          <Tabs
            defaultValue={sizeParam ?? DEFAULT_SIZE_VALUE}
            onChange={onChangeSize}
            items={sizeTabs}
          />
        </div>

        <div className="mb-[20px]">
          <p className="mb-[8px]">Additives</p>

          <Tabs
            multiply
            items={additiveTabs}
            onChange={onChangeAdditives}
            defaultValue={additivesParam}
          />
        </div>

        <div className="flex justify-between mb-[20px]">
          <p className="heading-3">Total:</p>
          <p className="heading-3">
            ${getTotalPriceStr(price, sizeSurcharge, additiveSurcharge)}
          </p>
        </div>

        <div className="flex gap-[8px] mb-[20px] py-[12px] border-t-[1px] border-borderLight">
          <InfoIcon className="shrink-0" width={16} height={16} />
          <p className="caption">
            The cost is not final. Download our mobile app to see the final price and
            place your order. Earn loyalty points and enjoy your favorite coffee with up
            to 20% discount.
          </p>
        </div>

        <Button className="w-full" onClick={closeModal}>
          Close
        </Button>
      </div>
    </section>
  );
}
