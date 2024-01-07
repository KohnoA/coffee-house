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
        <ul className="relative flex items-center pt-[20px] font-semibold lg:justify-between">
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
            className={`absolute w-full flex justify-between transition-transform duration-300 lg:fixed lg:z-20 lg:left-0 lg:right-0 lg:top-0 lg:bottom-0 lg:flex-col lg:justify-start lg:gap-[40px] lg:py-[100px] lg:items-center lg:bg-bgBody lg:shadow-2xl lg:overflow-auto lg:translate-x-full ${
              isActiveBurger ? 'lg:!translate-x-0' : ''
            }`}
          >
            <ul className="absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 flex gap-[40px] whitespace-nowrap lg:flex-col lg:items-center lg:gap-[20px] lg:static lg:translate-x-0 lg:translate-y-0">
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
              className="!absolute right-0 bottom-1/2 translate-y-1/2 lg:!static lg:translate-y-0"
              href={APP_ROUTES.MENU}
              isActive={pathname === APP_ROUTES.MENU}
            >
              Menu
              <CoffeeCupIcon width={20} height={20} />
            </MyLink>
          </li>

          <li className="hidden relative z-30 justify-between lg:block">
            <Button onClick={toggleBurgerMenu} className="group" rounded>
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
