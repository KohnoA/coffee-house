'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/UI/Button';
import { usePathname } from 'next/navigation';
import MyLink from '@/UI/MyLink';

import { APP_ROUTES } from '@/constants/routes';

const APP_LOGO_PATH = '/icons/logo.svg';
const MENU_ICON = '/icons/coffee-cup.svg';
const MAIN_ICON = '/icons/main.svg';

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
                  <Image
                    src={MAIN_ICON}
                    width={20}
                    height={20}
                    alt="Coffee Cup"
                  />
                </MyLink>
              </li>
              <li>
                <MyLink
                  href={APP_ROUTES.MENU}
                  isActive={pathname === APP_ROUTES.MENU}
                >
                  Menu
                  <Image
                    src={MENU_ICON}
                    width={20}
                    height={20}
                    alt="Coffee Cup"
                  />
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
