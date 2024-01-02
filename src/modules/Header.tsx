'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MyLink from '@/UI/MyLink';
import CoffeeCupIcon from '@/components/icons/CoffeeCupIcon';
import { APP_ROUTES, MAIN_ANCHORS } from '@/constants/routes';
import Button from '@/UI/Button';

const APP_LOGO_PATH = '/icons/logo.svg';

export default function Header() {
  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);

  const pathname = usePathname();

  const toggleBurgerMenu = () => setIsActiveBurger((prev) => !prev);

  const hiddenBurgerMenu = () => setIsActiveBurger(false);

  useEffect(() => {
    hiddenBurgerMenu();
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('scroll', hiddenBurgerMenu);

    return () => window.removeEventListener('scroll', hiddenBurgerMenu);
  }, []);

  return (
    <header className="container mb-[20px] bg-bgBody">
      <nav>
        <ul className="relative flex items-center pt-[20px] font-semibold max-[768px]:justify-between">
          <li className="relative z-30">
            <Link
              href={APP_ROUTES.MAIN}
              className="transition-opacity hover:opacity-90 active:opacity-75"
            >
              <Image
                src={APP_LOGO_PATH}
                width={100}
                height={60}
                alt="Coffee House Logo"
                priority
              />
            </Link>
          </li>

          <li
            className={`absolute w-full flex justify-between transition-transform duration-300 max-[768px]:fixed max-[768px]:z-20 max-[768px]:left-0 max-[768px]:right-0 max-[768px]:top-0 max-[768px]:bottom-0 max-[768px]:flex-col max-[768px]:justify-start max-[768px]:gap-[40px] max-[768px]:pt-[100px] max-[768px]:items-center max-[768px]:bg-bgBody max-[768px]:shadow-2xl max-[768px]:translate-x-full ${
              isActiveBurger ? 'max-[768px]:translate-x-0' : ''
            }`}
          >
            <ul className="min-[769px]:absolute left-1/2 min-[769px]:-translate-x-1/2 min-[769px]:bottom-1/2 min-[769px]:translate-y-1/2 flex gap-[40px] whitespace-nowrap max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-[20px]">
              <li>
                <MyLink href={MAIN_ANCHORS.NEW_PRODUCTS}>New products</MyLink>
              </li>
              <li>
                <MyLink href={MAIN_ANCHORS.ABOUT}>About</MyLink>
              </li>
              <li>
                <MyLink href={MAIN_ANCHORS.MOBILE_APP}>Mobile app</MyLink>
              </li>
              <li>
                <MyLink href={MAIN_ANCHORS.CONTACT_US}>Contact us</MyLink>
              </li>
            </ul>

            <MyLink
              className="min-[769px]:!absolute min-[769px]:right-0 min-[769px]:bottom-1/2 min-[769px]:translate-y-1/2"
              href={APP_ROUTES.MENU}
              isActive={pathname === APP_ROUTES.MENU}
            >
              Menu
              <CoffeeCupIcon width={20} height={20} />
            </MyLink>
          </li>

          <li className="hidden relative z-30 justify-between max-[768px]:block">
            <Button onClick={toggleBurgerMenu} className="group !p-[14px] !rounded-full">
              <div className="flex flex-col justify-center gap-[8px] w-[16px] h-[16px]">
                <span
                  className={`w-full h-[2px] bg-bgContainer transition-all duration-300 rounded-md group-hover:bg-bgBody ${
                    isActiveBurger ? '-rotate-45 translate-y-[5px]' : ''
                  }`}
                />
                <span
                  className={`w-full h-[2px] bg-bgContainer transition-all duration-300 rounded-md group-hover:bg-bgBody ${
                    isActiveBurger ? 'rotate-45 -translate-y-[5px]' : ''
                  }`}
                />
              </div>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
