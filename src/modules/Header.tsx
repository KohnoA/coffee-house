'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Button from '@/UI/Button';
import MyLink from '@/UI/MyLink';
import MainIcon from '@/components/icons/MainIcon';
import CoffeeCupIcon from '@/components/icons/CoffeeCupIcon';

import { APP_ROUTES } from '@/constants/routes';

const APP_LOGO_PATH = '/icons/logo.svg';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="container mb-[20px]">
      <nav>
        <ul className="flex justify-between items-center pt-[20px] font-semibold">
          <li>
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

          <li>
            <ul className="flex items-center gap-8">
              <li>
                <MyLink
                  href={APP_ROUTES.MAIN}
                  isActive={pathname === APP_ROUTES.MAIN}
                >
                  Main
                  <MainIcon width={20} height={20} />
                </MyLink>
              </li>
              <li>
                <MyLink
                  href={APP_ROUTES.MENU}
                  isActive={pathname === APP_ROUTES.MENU}
                >
                  Menu
                  <CoffeeCupIcon width={20} height={20} />
                </MyLink>
              </li>
              <li>
                <Button className="py-[10px] px-[40px]">Sign In</Button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
