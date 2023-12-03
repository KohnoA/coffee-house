import Image from 'next/image';
import Link from 'next/link';
import Button from '@/UI/Button';

import { APP_ROUTES } from '@/constants/routes';

const APP_LOGO_PATH = '/icons/logo.svg';
const MENU_ICON = '/icons/coffee-cup.svg';

export default function Header() {
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
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href={APP_ROUTES.MENU}
                  className="relative flex gap-1 items-center py-1 transition-opacity group active:opacity-75"
                >
                  Menu{' '}
                  <Image
                    src={MENU_ICON}
                    width={20}
                    height={20}
                    alt="Coffee Cup"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-textDark transition-all group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Button className='py-[10px] px-[40px]'>Sign In</Button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
