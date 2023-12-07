import Button, { BUTTON_VIEW } from '@/UI/Button';
import ArrowRight from '@/components/icons/ArrowRight';
import { APP_ROUTES } from '@/constants/routes';
import Image from 'next/image';
import Link from 'next/link';

const BG_PATH = '/images/promo.jpg';

export default function Promo() {
  return (
    <section className="relative flex justify-start items-start mb-[100px] py-[100px] px-[100px] text-textLight rounded-[40px] overflow-hidden">
      <div className="max-w-[530px]">
        <h2 className="heading-1 mb-[40px]">
          <span className="text-textAccent italic">Enjoy</span> premium coffee
          at our charming cafe
        </h2>
        <p className="mb-[40px]">
          With its inviting atmosphere and delicious coffee options, the Coffee
          House Resource is a popular destination for coffee lovers and those
          seeking a warm and inviting space to enjoy their favorite beverage.
        </p>
        <Button
          as={Link}
          href={APP_ROUTES.MENU}
          className="w-fit relative group flex justify-center items-center gap-2"
          view={BUTTON_VIEW.PRIMARY}
        >
          <span className="transition-transform group-hover:-translate-x-3">
            Menu
          </span>
          <ArrowRight
            className="absolute top-1/2 -translate-y-[50%] right-16 opacity-0 transition-opacity group-hover:opacity-100"
            width={20}
            height={20}
          />
        </Button>
      </div>

      <Image
        className="-z-10"
        src={BG_PATH}
        fill
        sizes="1360px"
        alt="Enjoy premium coffee at our charming cafe"
      />
    </section>
  );
}
