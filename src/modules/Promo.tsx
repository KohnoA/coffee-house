import Image from 'next/image';
import Link from 'next/link';
import Button, { BUTTON_VIEW } from '@/UI/Button';
import Title from '@/UI/Title';
import ArrowRight from '@/components/icons/ArrowRight';
import { APP_ROUTES } from '@/constants/routes';
import bgImage from '@/../public/images/promo.jpg';

export default function Promo() {
  return (
    <section className="relative flex justify-start items-start mb-[100px] py-[100px] px-[100px] text-textLight rounded-[40px] overflow-hidden bg-bgContainer max-xl:px-[60px]">
      <div className="relative z-10 max-w-[530px]">
        <Title level={2}>
          <span className="text-textAccent italic">Enjoy</span> premium coffee at our
          charming cafe
        </Title>
        <p className="mb-[40px]">
          With its inviting atmosphere and delicious coffee options, the Coffee House
          Resource is a popular destination for coffee lovers and those seeking a warm and
          inviting space to enjoy their favorite beverage.
        </p>
        <Button
          as={Link}
          href={APP_ROUTES.MENU}
          className="w-fit relative group flex justify-center items-center gap-2"
          view={BUTTON_VIEW.PRIMARY}
        >
          <span className="transition-transform group-hover:-translate-x-3">Menu</span>
          <ArrowRight
            className="absolute top-1/2 -translate-y-[50%] right-16 opacity-0 transition-opacity group-hover:opacity-100"
            width={20}
            height={20}
          />
        </Button>
      </div>

      <Image
        className="object-cover"
        src={bgImage}
        placeholder="blur"
        blurDataURL={bgImage.blurDataURL}
        fill
        sizes="1360px"
        alt="Enjoy premium coffee at our charming cafe"
      />
    </section>
  );
}
