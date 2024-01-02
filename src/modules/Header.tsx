'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MyLink from '@/UI/MyLink';
import CoffeeCupIcon from '@/components/icons/CoffeeCupIcon';
import { APP_ROUTES, MAIN_ANCHORS } from '@/constants/routes';

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
            <ul className="flex gap-[40px]">
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
          </li>

          <li>
            <MyLink href={APP_ROUTES.MENU} isActive={pathname === APP_ROUTES.MENU}>
              Menu
              <CoffeeCupIcon width={20} height={20} />
            </MyLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
